export function acronym(
//Perfected!
text, config = { mutipleWords: false, lengthOfResult: 2 }) {
    let { mutipleWords, lengthOfResult } = config;
    if (typeof text !== "string") {
        return "First Parameter is not a valid String";
    }
    if (lengthOfResult === 2 && mutipleWords) {
        let strArr = text.split(" "), newStr = "";
        strArr.forEach((str) => {
            newStr += str.substring(0, 1);
        });
        return newStr.substring(0, 2).toLocaleUpperCase();
    }
    else if (lengthOfResult === 2 && !mutipleWords) {
        return text.substring(0, 2).toLocaleUpperCase();
    }
    else if (lengthOfResult !== 2 && mutipleWords) {
        let strArr = text.split(" "), newStr = "";
        strArr.forEach((str) => {
            newStr += str.substring(0, 1);
        });
        return newStr.substring(0, lengthOfResult).toLocaleUpperCase();
    }
    else {
        return text.substring(0, lengthOfResult).toLocaleUpperCase();
    }
}
//# sourceMappingURL=acronym.js.map