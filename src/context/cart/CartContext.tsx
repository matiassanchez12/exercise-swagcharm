import React from "react";
import { ICartProduct } from "../../interfaces/cart";

interface ContextProps {
  cart: ICartProduct[];
  numberOfItems: number;
  total: number;
  tabIndex: number;
  search: string;

  addProductToCart: (product: ICartProduct) => void;
  updateProductQuantity: (product: ICartProduct) => void;
  removeCartProduct: (product: ICartProduct) => void;
  updateTabIndex: (index: number) => void;
  updateSearch: (text: string) => void;
}

export const CartContext = React.createContext({} as ContextProps);
