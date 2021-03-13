import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  men: 5,
};

export const selectShopCollection = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionId = (collectionId) =>
  createSelector([selectShopCollection], (collection) =>
    collection.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionId]
    )
  );
