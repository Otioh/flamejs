interface sumInterface {
    sum: number;
    errors: boolean;
    badParameters: string[];
    count: number;
}
export declare function sum(...numbers_Or_Arrays: any[]): sumInterface;
export {};
