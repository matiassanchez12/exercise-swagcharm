export interface IProduct {
  id: string;
  images: string[];
  inStock: number;
  price: number;
  title: string;
  type: ICategory;
}

export type ICategory = "packaging" | "drinware" | "apparel" | "notebooks" | "backpacks";
