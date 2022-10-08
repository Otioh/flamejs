export default function len(object){
    if(object.length===undefined){
        return "Parameter is neither an Array nor a String and does not support the Flame len method!"
    }
        return parseInt(object.length);
    }