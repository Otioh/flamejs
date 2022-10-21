import funSeque from "./funseque.js";

funSeque({delaySeconds:2, isPromise:true},
    ()=>console.log('log1'), 
    ()=>console.log('log2'), 
    ()=>console.log('log3')
    )