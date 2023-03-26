# Flame-Tools JS Documentation

Flame-Tools is a JavaScript Libray of frequently used tools for JavaScript Developers.

It is a collection of solutions to some algorithm intensive and time consuming recurrent task that developers always encounter in the process of implementing Application solutions in JavaScript. The tools are listed below.

## Flame-Tools

* sum  -> The sum tool is very useful for summing up numbers which are supplied as individual parameters, array of numbers or array of objects to sum a particular column.

To calculate sum of a given column in an array of objects, make sure the last item in the array is a function that takes in an iterator and returns the column to be calculated (e.g [...testArr, (i)=>testArr[i].amount]) and then feed the sum function with the array.


The Tool does not break any process even when it encounters a non-number item as it rather returns an object of the sum, bad parameters, errors and count of successful additions. Check the code example below for usage.


* funSeque -> This tool executes  functions sequentially in an interval you provide, we can describe it as Promises with more control. Check the code example below for usage.


## Installation
`npm i flame-tools`

## Import
`import {sum, funSeque} from 'flame-tools'`

#  USAGE

`

    let items=[
        {item:'Book', amount:400}, 
        {item:'Pen', amount:100}, 
        (i)=>items[i].amount
    ];
    
    let numbers=[1,6,7,9,'bad_dfdf'];

    let result=sum(4, 5, 7, 7, 5, numbers, items);

    console.log(result.sum, 'sum')

    console.log(result.count, 'count')

    console.log(result.errors, 'error?')

    console.log(result.badParameters, 'badParams')





// funSeque

funSeque( {delaySeconds:5, isPromise:true},
    ()=>{
        console.log('Book is a writing material')
    },

    ()=>{
        console.log('Goat is a domestic animal')
    },

    ()=>{
        console.log('Helping is a great investment')
    }    )
    

`
