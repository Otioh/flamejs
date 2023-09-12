interface Percentage {
    percent: number;
    totalValue: number | undefined;
    value: number | undefined;
    error?: string;
}
export declare function percentage(values: {
    value?: number;
    totalValue?: number;
}, percent?: number): Percentage;
export {};
