import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopCollection = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionPreviews = createSelector(
  [selectShopCollection],
  (collection) =>
    collection ? Object.keys(collection).map((key) => collection[key]) : []
);

export const selectCollectionId = (collectionId) =>
  createSelector([selectShopCollection], (collection) =>
    collection ? collection[collectionId] : null
  );
