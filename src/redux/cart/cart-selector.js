import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItem = createSelector(
  [selectCart],
  (cart) => cart.cartItem
);

export const selectCartDropDownHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemCount = createSelector(
  [selectCartItem],
  (cartItem) => cartItem.reduce((acV, cuV) => acV + cuV.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItem], (cartItem) =>
  cartItem.reduce((acV, cuV) => acV + cuV.quantity * cuV.price, 0)
);
