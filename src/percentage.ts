import { Percentage } from "./all.interface";
export default function percentage(
  values: { value?: number; totalValue?: number },
  percent = 100
): Percentage {
  let { value, totalValue } = values;

  let result: number;
  if (value === undefined && totalValue === undefined) {
    return {
      error: "Error: value and totalValue is not defined!",
      value,
      totalValue,
      percent,
    };
  } else {
    if (percent !== 100) {
      if (value === undefined && totalValue !== undefined) {
        value = (percent * totalValue) / 100;
      } else if (totalValue === undefined && value !== undefined) {
        totalValue = (value * 100) / percent;
      }

      return {
        percent: percent,
        value: value,
        totalValue: totalValue,
      };
    } else {
      if (value && totalValue) {
        result = (value / totalValue) * 100;
      } else {
        result = 0;
      }
      return {
        percent: result,
        value: value,
        totalValue: totalValue,
      };
    }
  }
}
