export default function abr(string,  mutipleWords, lengthOfResult){
    if(typeof string!=="string"){
    return "First Parameter is not a valid String";
    }    
    lengthOfResult===undefined?lengthOfResult=2:lengthOfResult;
    mutipleWords===undefined?mutipleWords=false:mutipleWords;
    if(lengthOfResult===2 && mutipleWords){
        let strArr=string.split(" "),
         newStr="";
        strArr.forEach((str)=>{
            newStr+=str.substring(0,1);
        })
        return newStr.substring(0,2).toLocaleUpperCase();
    }else if(lengthOfResult===2 && !mutipleWords){
        return string.substring(0,2).toLocaleUpperCase();
    }else if(lengthOfResult!==2 && mutipleWords){
        let strArr=string.split(" "),
        newStr="";
        strArr.forEach((str)=>{
            newStr+=str.substring(0,1);
        })
        return newStr.substring(0,lengthOfResult).toLocaleUpperCase();
    }else{
        return string.substring(0,lengthOfResult).toLocaleUpperCase();
    }
    }