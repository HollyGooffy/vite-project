export interface Product {
    id: number;
    inStock: boolean;
    name: string;
    weight: string;
    price: number;
    oldPrice?: number;
}