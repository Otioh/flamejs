# flamejs

Read Me:

# Installation
`npm i flame-tools`

FLAME TOOLS DOCUMENTATION

`import {sum, funSeque, abr, len, cl} from 'flame-tools';`

Flame JS comes with some handy tools for some frequent task that could be time consuming. Some of the tools include:

* sum: returns
{
    sum,
    badParameters, 
    errors, 
    count
    
    }

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


The sum tool returns an object with the sum of all parameters passed into it including those inside an array of numbers and array of objects. To calculate sum of a given column in an array of objects, make sure the last item in the array is a function that takes in an iterator and returns the column to be calculated ([...testArr, (i)=>testArr[i].amount]) and then feed the sum function with the array.

*cl: Logs messages to the console with a matching title.

*funSeque: Executes functions sequentially at an interval you provide in seconds.




`funSeque( {delaySeconds:5, isAsync:true},
    ()=>{
cl('Book is a writing material')
    },
    ()=>{
        cl('Goat is a domestic animal')
    },
    ()=>{
        cl('Helping is a great investment')
    }    )`
    
*etc.