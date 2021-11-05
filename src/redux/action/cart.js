export const addGoodsToCart = (goodsObj) => ({
  type: "ADD_GOODS_CART",
  payload: goodsObj,
});

export const removeCartItem = (id) => ({
  type: "REMOVE_CAR_ITEM",
  payload: id,
});
