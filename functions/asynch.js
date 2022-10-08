export default async function asynch(config={delaySeconds:0, isAsync:false}, functions=[]){
    let counter=0;
    let currentFunction=functions[counter];
    
    async function execute(){
    if(await currentFunction()){
        counter++;
        currentFunction=functions[counter];
        return execute();
    }else{
        return false;
    }
}
execute()
}
