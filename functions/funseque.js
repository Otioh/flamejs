import asynch from "./asynch.js";

export default function funSeque(config={delaySeconds:0, isAsync:false}, ...functions){
    if(config.isAsync){
        asynch(config, functions)
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
       }, config.delaySeconds*1000);
       }
       execute()
    }  
}