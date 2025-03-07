// types/evSales.ts

export type Dataset = {
    id: string;
    name: string;
    filePath: string;
    createdAt: Date;
};

export type EVSalesHistoric = {
    id: string;
    year: number;
    sales: number;
    country: string;
    region: string;
    datasetId: string; // Foreign key linking to Dataset
};
