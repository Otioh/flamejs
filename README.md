# flamejs
Read Me:

FLAME LIBRARY DOCUMENTATION
Flame JS comes with some handy tools for some frequent task that could be time consuming. Some of the tools include:

* SUM: returns
{
    sum,
    badParameters, 
    errors, 
    count
    
    }
The sum tool returns an object with the sum of all parameters passed into it including those inside an array of numbers and array of objects. To calculate sum of a given column in an array of objects, make sure the last item in the array is a function that takes in an iterator and returns the column to be calculated ([...testArr, (i)=>testArr[i].amount]) and then feed the sum function with the array.

*CL: Logs messages to the console with a matching title.

*FUNEX: Executes functions sequentially at an interval you provide in seconds.
*etc.
