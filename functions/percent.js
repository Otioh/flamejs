export default function percentage(values={value:0, totalValue:0}, percent=100){
let result;
if(values.value===undefined && values.totalValue===undefined){
    return {percent:"Error: value or totalValue is not defined!",totalValue:"Error: value or totalValue is not defined!",value:"Error: value or totalValue is not defined!"}
}else{
if(percent!==100){

   
    if(values.value===undefined){
        values.value=percent*values.totalValue/100;
    } else if(values.totalValue===undefined){
        values.totalValue=values.value*100/percent;
    }




    return {percent:parseFloat(percent).toFixed(1),
            value:parseFloat(values.value).toFixed(1),
            totalValue:parseFloat(values.totalValue).toFixed(1)
};
}else{
    result=values.value/values.totalValue*100;
    return {percent:parseFloat(result).toFixed(1)+"%",
            value:values.value,
            totalValue:values.totalValue
};

}
}

}