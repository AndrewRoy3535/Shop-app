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

export const removeFromCart = (cartItem, actionPayload) => {
  const removeItem = cartItem.filter(
    (cartItem) => cartItem.id !== actionPayload.id
  );
  return removeItem;
};

export const decreaseItem = (cartItem, itemToRemove) => {
  const exsitingItem = cartItem.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );

  if (exsitingItem.quantity === 1) {
    return cartItem.filter((cartItem) => cartItem.id === itemToRemove.id);
  }

  return cartItem.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
