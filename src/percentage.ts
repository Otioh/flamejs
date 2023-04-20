import { Percentage } from "./all.interface";
export default function percentage(
  value=0, totalValue=0,
  percent = 100
): Percentage {
  let result: number;
  if (value === undefined && totalValue === undefined) {
    return {
      error: "Error: value or totalValue is not defined!",
      value:value,
      totalValue:totalValue,
      percent
    };
  } else {
    if (percent !== 100) {
      if (value === undefined) {
        value = (percent * totalValue) / 100;
      } else if (totalValue === undefined) {
        totalValue = (value * 100) / percent;
      }

      return {
        percent: percent,
        value: value,
        totalValue: totalValue,
      };
    } else {
      result = (value / totalValue) * 100;
      return {
        percent: result,
        value: value,
        totalValue: totalValue,
      };
    }
  }
}
