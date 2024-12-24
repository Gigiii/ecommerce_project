export enum Color {
  Red = "#FF0000",
  Green = "#00FF00",
  Blue = "#0000FF",
  Black = "#000000",
  White = "#FFFFFF",
  Yellow = "#FFFF00",
  Cyan = "#00FFFF",
  Magenta = "#FF00FF",
}

export enum Size {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XXL = "XXL",
}

export interface Product {
  id: number;
  name: string;
  imageUrls: string[];
  categories: string[];
  size: Size[];
  price: number;
  inStock: boolean;
  color: Color[];
  description: string;
}
