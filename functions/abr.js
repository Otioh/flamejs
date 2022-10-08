export default function abr(string ="",  config={mutipleWords:false, lengthOfResult:2}){
   
    let {mutipleWords, lengthOfResult}=config;
    if(typeof string!=="string"){
    return "First Parameter is not a valid String";
    }    
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