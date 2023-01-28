import { ICategory } from "./products";

export interface ICartProduct {
  quantity: number;
  id: string;
  images: string[];
  price: number;
  title: string;
  type: ICategory;
}
