export const addItemsToCart = (cartItems, addedItem) => {
  const exsitingItems = cartItems.find(
    (cartItem) => cartItem.id === addedItem.id
  );

  if (exsitingItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === addedItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...addedItem, quantity: 1 }];
};
