import React, { useEffect } from "react";
import { IProduct } from "../../interfaces";
import { ICartProduct } from "../../interfaces/cart";

import { CartContext, cartReducer } from "./";

interface Props {
  children: React.ReactNode;
}

export interface CartState {
  cart: ICartProduct[];
  products: IProduct[];
  numberOfItems: number;
  total: number;
  tabIndex: number;
  search: string;
}

const CART_INITIAL_STATE: CartState = {
  cart: [],
  products: [],
  numberOfItems: 0,
  total: 0,
  tabIndex: 0,
  search: "",
};

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(cartReducer, CART_INITIAL_STATE);

  useEffect(() => {
    const numberOfItems = state.cart.length;
    const total = state.cart.reduce((prev, current) => current.price * current.quantity + prev, 0);

    dispatch({ type: "Update total", payload: total });
    dispatch({ type: "Update number of items", payload: numberOfItems });
  }, [state]);

  const addProductToCart = (product: ICartProduct) => {
    const productInCart = state.cart.some((p) => p.id === product.id);

    if (!productInCart) {
      return dispatch({ type: "Update products in cart", payload: [...state.cart, product] });
    }

    const updatedProducts = state.cart.map((p) => {
      if (p.id !== product.id) return p;

      p.quantity += product.quantity;
      return p;
    });

    dispatch({ type: "Update products in cart", payload: updatedProducts });
  };

  const updateProductQuantity = (product: ICartProduct) => {
    dispatch({ type: "Change product quantity", payload: product });
  };

  const removeCartProduct = (product: ICartProduct) => {
    dispatch({ type: "Remove product in cart", payload: product });
  };

  const updateTabIndex = (index: number) => {
    dispatch({ type: "Update index tab", payload: index });
  };

  const updateSearch = (text: string) => {
    dispatch({ type: "Update search", payload: text });
  };

  return (
    <CartContext.Provider
      value={{ ...state, addProductToCart, updateProductQuantity, removeCartProduct, updateTabIndex, updateSearch }}
    >
      {children}
    </CartContext.Provider>
  );
};
