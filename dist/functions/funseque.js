function promise() {
    return new Promise((resolve) => {
        resolve(1);
    });
}
function asynch(delaySeconds, functions) {
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
export function funseque(config = { delaySeconds: 0, isPromise: false }, ...functions) {
    if (config.isPromise) {
        asynch(config.delaySeconds, functions);
    }
    else {
        let i = 0;
        function execute() {
            let fn = functions[i];
            fn();
            i++;
            setTimeout(() => {
                if (i === functions.length) {
                    return true;
                }
                else {
                    return execute();
                }
            }, config.delaySeconds * 1000);
        }
        execute();
    }
}
//# sourceMappingURL=funseque.js.map