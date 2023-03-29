# Flame-Tools JS Documentation

[![](https://img.shields.io/npm/v/flame-tools.svg)](https://npmjs.org/package/flame-tools)  [![](https://img.shields.io/npm/dt/flame-tools.svg?maxAge=3600)](https://www.npmjs.com/package/flame-tools) [![](https://data.jsdelivr.com/v1/package/npm/flame-tools/badge)](https://www.jsdelivr.com/package/npm/flame-tools)


Flame-Tools is a JavaScript Libray of frequently used tools for JavaScript Developers.

It is a collection of solutions to some algorithm intensive and time consuming recurrent task that developers always encounter in the process of implementing Application solutions in JavaScript. The tools are listed below.

## Flame-Tools

* sum  -> The sum tool is very useful for summing up numbers which are supplied as individual parameters, array of numbers or array of objects to sum a particular column.

To calculate sum of a given column in an array of objects, make sure the last item in the array is a function that takes in an iterator and returns the column to be calculated (e.g [...testArr, (i)=>testArr[i].amount]) and then feed the sum function with the array.

You can feed the sum tool with numbers, array of numbers and array of objects at the same time and the sum tool would handle the addition for all numeric values supplied including those wrapped in quotes as a string.

The Tool does not break any process even when it encounters a non-number item as it rather returns an object of the sum, bad parameters, errors and count of successful additions. Check the code example below for usage.

* funSeque -> This tool executes  functions sequentially in an interval you provide, we can describe it as Promises with more control. Check the code example below for usage.

* acronym -> This tool abbreviates strings according to configurations you provide, it can be useful when you want to get the first Letter(s) of a word or first Letter(s) of range of words. Check the code example below for usage.

* percentage -> This tool takes values and returns an object of the total value, actual value and percentage of the actual value. You can supply the percentage and total value and obtain the actual value. It is applicable to all use cases of percentage. Check the code example below for usage.

## Installation
`npm i flame-tools`

## Import
`import {sum, funSeque, acronym, percentage} from 'flame-tools'`

#  USAGE

```
//sum
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

funSeque(

    {delaySeconds:5, isPromise:true},

    ()=>{
        console.log('Book is a writing material')
    },

    ()=>{
        console.log('Goat is a domestic animal')
    },

    ()=>{
        console.log('Helping is a great investment')
    }     
    
    
    )




// acronym
console.log(acronym('Erim Emmanuel', {
    mutipleWords: true;
    lengthOfResult: 2;
}))




//percentage
console.log(percentage({value:5, totalValue:25}).percent)

```