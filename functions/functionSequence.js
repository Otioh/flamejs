export default function functionSequence (delaySeconds, ...functions){
    let counter = 0;
    const doAgain = setInterval(() => {
        if (counter === functions.length) {
            clearInterval(doAgain);
        } else {
            let doNow = functions[counter];
            doNow();
            counter++;
        }

    }, delaySeconds * 1000);
    return true;
}