export function percentage(values, percent = 100) {
    let { value, totalValue } = values;
    let result;
    if (value === undefined && totalValue === undefined) {
        return {
            error: "Error: value and totalValue is not defined!",
            value,
            totalValue,
            percent,
        };
    }
    else {
        if (percent !== 100) {
            if (value === undefined && totalValue !== undefined) {
                value = (percent * totalValue) / 100;
            }
            else if (totalValue === undefined && value !== undefined) {
                totalValue = (value * 100) / percent;
            }
            return {
                percent: percent,
                value: value,
                totalValue: totalValue,
            };
        }
        else {
            if (value && totalValue) {
                result = (value / totalValue) * 100;
            }
            else {
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
//# sourceMappingURL=percentage.js.map