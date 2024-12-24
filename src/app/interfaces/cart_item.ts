import { Color, Size } from "./product";

export interface CartItem {
  id: number;
  name: string;
  imageUrl: string;
  size: Size;
  price: number;
  quantity: number;
  color: Color;
}
