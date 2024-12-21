export enum Size {
  S = "Small",
  M = "Medium",
  L = "Large",
  XL = "Extra Large",
  XXL = "2 Extra Large",
}

export interface Product {
  id: number;
  name: string;
  imageUrls: string[];
  categories: string[];
  size: Size;
  price: number;
  inStock: boolean;
  color: string;
}
