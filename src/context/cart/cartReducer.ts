import { CartState } from ".";
import { ICartProduct } from "../../interfaces/cart";

type CartActionType =
  | { type: "Update products in cart"; payload: ICartProduct[] }
  | { type: "Update index tab"; payload: number }
  | { type: "Update number of items"; payload: number }
  | { type: "Update total"; payload: number }
  | { type: "Change product quantity"; payload: ICartProduct }
  | { type: "Remove product in cart"; payload: ICartProduct }
  | { type: "Update search"; payload: string };

export const cartReducer = (state: CartState, action: CartActionType): CartState => {
  switch (action.type) {
    case "Update products in cart":
      return {
        ...state,
        cart: [...action.payload],
      };
    case "Change product quantity":
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product.id !== action.payload.id) return product;

          return action.payload;
        }),
      };
    case "Remove product in cart":
      return {
        ...state,
        cart: state.cart.filter((product) => {
          if (product.id === action.payload.id) {
            return false;
          }
          return true;
        }),
      };
    case "Update index tab":
      return {
        ...state,
        tabIndex: action.payload,
      };
    case "Update search":
      return {
        ...state,
        search: action.payload,
      };
    case "Update number of items":
      return {
        ...state,
        numberOfItems: action.payload,
      };
    case "Update total":
      return {
        ...state,
        total: action.payload,
      };
    default:
      return state;
  }
};
