import {sum, funSeque, abr, len, cl} from './index.js';

// Sum function

(function(){
    
    let items=[
        {item:'Book', amount:400}, 
        {item:'Pen', amount:100}, 
        (i)=>items[i].amount
    ];
    
    let numbers=[1,6,7,9,'dfdf'];

    let result=sum(4, 5, 7, 7, 5, numbers, items);

    cl(result.sum, 'sum')


    cl(result.count, 'count')

    cl(result.errors, 'error?')

    cl(result.badParameters, 'badParams')



})()



// funSeque Function

funSeque(
    {delaySeconds:5, isAsync:true},
    ()=>{
cl('Book is a writing material')
    },
    ()=>{
        cl('Goat is a domestic animal')
    },
    ()=>{
        cl('Helping is a great investment')
    }

    )
    

