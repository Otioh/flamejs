export default function funex(config={delaySeconds, isPromise}, ...functions){
    
    
    if(config.isPromise){
        let curFunction;
        let counter=0;
function myPromise(){
return new Promise((resolve, reject)=>{
  
    if(1===1){
        resolve();
    }else{
        reject();
    }


})

}
curFunction= myPromise;
function recurs(){
curFunction().then(()=>{
    if(counter<functions.length){
        curFunction=functions[counter];
        counter++;
        return recurs();
    }else{
        return false;
    }
})

}

recurs()

    }else{
        let i=0;
        function execute(){
       let fn=functions[i];
       fn();
       i++;
       setTimeout(() => {
           if(i===functions.length){
              return true;
           }else{
           return execute()
           }
           
       }, delaySeconds*1000);
       }
       execute()

    }
    
   
}
