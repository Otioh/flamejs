export interface sumInterface {
  sum: number;
  errors: boolean;
  badParameters: string[];
  count:number
}

export interface Percentage {
  percent: number;
  totalValue: number | undefined;
  value: number | undefined;
  error?: string;
}