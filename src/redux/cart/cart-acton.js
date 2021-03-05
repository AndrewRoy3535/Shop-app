import { cartActionTypes } from "./cart-types";

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_DROPDOWN,
});

export const addItemCart = (item) => ({
  type: cartActionTypes.ADD_CART_ITEM,
  payload: item,
});
