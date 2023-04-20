import asynch from "./asynch";

export default function funSeque(
  config = { delaySeconds: 0, isPromise: false },
  ...functions:any[]
):void {
  if (config.isPromise) {
    asynch(config.delaySeconds, functions);
  } else {
    let i = 0;
    function execute() {
      let fn = functions[i];
      fn();
      i++;
      setTimeout(() => {
        if (i === functions.length) {
          return true;
        } else {
          return execute();
        }
      }, config.delaySeconds * 1000);
    }
    execute();
  }
}
