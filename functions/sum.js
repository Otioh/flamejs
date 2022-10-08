// *Sum:
// The sum function returns the sum of all the parameters passed into it, including items inside array
// of numbers and array of objects, errors status in boolean type, count of all items added successfully
//  and an array of badParameters that could not be processed.

// To work with array of objects, the passed in array must have the last item as a function that takes in
// index of a given item of the array and returns the column to be calculated.
// (e.g. [...testArr, (i)=>testArr[i].amount]).


export default function sum(...numbersOrArrayOfNumbersOrArrayOfObjectsWithAColumnSpecifierFunction /* can */){
    let sumAll=0,
     errors=false,
     badParameters=[],
     count=0;
     numbersOrArrayOfNumbersOrArrayOfObjectsWithAColumnSpecifierFunction.forEach((parameter)=>{
        if(typeof parameter==="object" && parameter.length!==undefined){
           let innerSum=0;
           parameter.forEach((param, index)=>{
        if (isNaN(param)){
            if(typeof param==="object" && param.length===undefined){
             let fn=parameter[parameter.length-1];
           if(isNaN(fn(index))){
            badParameters.push(param)
            errors=true;
           }else{
            innerSum+=parseInt(fn(index));
            count++;
           }
            }else{
                badParameters.push(param)
                errors=true;
            } 
         }else{
            innerSum+=parseInt(param);
            count++;
         }
            })
          sumAll+=innerSum;
        }        
        else if(isNaN(parameter)){
badParameters.push(parameter);
errors=true;
        }
        else{
            sumAll+=parseInt(parameter);
            count++;
        }
    })
    return {sum:sumAll,badParameters, errors, count};

}