import { cartActionTypes } from "./cart-types";

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_DROPDOWN,
});

export const addItemCart = (item) => ({
  type: cartActionTypes.ADD_CART_ITEM,
  payload: item,
});

export const removeCartItem = (item) => ({
  type: cartActionTypes.REMOVE_CART_ITEM,
  payload: item,
});

export const decreaseCartItem = (item) => ({
  type: cartActionTypes.DECREASE_CART_ITEM,
  payload: item,
});
