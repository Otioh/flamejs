export default function percent(value=0, totalValue=0, percentageScale=100){
let result=0;

result=value/totalValue*percentageScale;
    return result;
}