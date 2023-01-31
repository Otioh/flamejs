# flame-tools js

Read Me:

# Installation
`npm i flame-tools`

FLAME TOOLS DOCUMENTATION

`import {sum, funSeque, percentage, abr, len, cl} from 'flame-tools';`

Flame-Tools JS comes with some handy tools for some frequent task that could be algorithm intensive and time consuming. Some of the tools include:

* SUM: The sum tool is very useful for summing up numbers which are supplied as individual parameters, array of numbers or array of objects to sum a particular column.

The Tool does not break any process even when it encounters a non-number item as it rather returns an object of the sum, bad parameters, errors and count as described below:
 returns
`{
    sum,
    badParameters, 
    errors, 
    count
    
    }
`
// Sum function


    
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




The sum tool returns an object with the sum of all parameters passed into it including those inside an array of numbers and array of objects. To calculate sum of a given column in an array of objects, make sure the last item in the array is a function that takes in an iterator and returns the column to be calculated ([...testArr, (i)=>testArr[i].amount]) and then feed the sum function with the array.


*funSeque: Executes functions sequentially at an interval you provide in seconds. This tool also handles promises with some extra controls of delay intervals. I describe it as the cleanest and best way to implement asynchronous operations or handle promises.


`funSeque( {delaySeconds:5, isPromise:true},
    ()=>{
cl('Book is a writing material')
    },
    ()=>{
        cl('Goat is a domestic animal')
    },
    ()=>{
        cl('Helping is a great investment')
    }    )`
    




* Percentage: 



*cl: Logs messages to the console with a matching title.
