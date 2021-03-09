import cartActionTypes from "./cart-types";
import { addItemsToCart, removeFromCart, decreaseItem } from "./cart-utils";

const INITIAL_STATE = {
  hidden: true,
  cartItem: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.ADD_CART_ITEM:
      return {
        ...state,
        cartItem: addItemsToCart(state.cartItem, action.payload),
      };
    case cartActionTypes.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItem: removeFromCart(state.cartItem, action.payload),
      };
    case cartActionTypes.DECREASE_CART_ITEM:
      return {
        ...state,
        cartItem: decreaseItem(state.cartItem, action.payload),
      };
    default:
      return state;
  }
};
