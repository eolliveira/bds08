export type Store = {
    id: number,
    name: string;
}

export type PieChartConfig = {
    labels: string[];
    series: number[];
};

export type SalesByGender = {
  gender: string,
  sum: number
}

export type SalesSummary = {
  min: number,
  max: number,
  sum: number,
  avg: number,
  count: number;
}

export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type FilterData = {
  storeId?: number;
};

