export default function format(data){
        return {
            
currency:()=>{
    let result='';
    let received =data+"";
    let price=received.split('.')[0];
    let start=0;
for(let i=0; i<price.length/3;i++){
    result=result+price.substring(start, start+3);
    start=start+3;
}
    return result;
},






        }
    }