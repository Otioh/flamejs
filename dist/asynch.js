function promise() {
    return new Promise((resolve) => {
        resolve(1);
    });
}
export default function asynch(delaySeconds, functions) {
    let i = -1;
    function loop() {
        if (i < functions.length - 1) {
            i++;
            promise().then(() => {
                functions[i]();
                setTimeout(() => {
                    return loop();
                }, delaySeconds * 1000);
            });
        }
    }
    loop();
}
//# sourceMappingURL=asynch.js.map