function funex(delaySeconds, ...functions){
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
  


funex(2, ()=>console.log("yeye"), ()=>console.log("yeye"))