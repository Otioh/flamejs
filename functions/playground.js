function cl(message, title){
    title===undefined?title="outputTitle":title;
console.log(`${title}:  ${message}`)
}
function len(object){
    if(object.length===undefined){
        return "Parameter is neither an Array nor a String and does not support the Flame len method!"
    }
        return object.length;
    }

function sum(...arg){
    let sumAll=0,
     errors=false,
     badParameters=[],
     count=0;


    arg.forEach((parameter)=>{
     
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
let testArr= [{name:"Erim", amount:600}, {name:"Emmanuel", amount:502}, {name:"Otioh", amount:300}]
testArr.push((i)=>testArr[i].amount);
console.log(sum(1,2,4,5,6,"fdf","3", testArr));

cl(len(testArr), "length")