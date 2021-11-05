const initialState = {
  items: {},
  totalPrice: "корзина пуста",
  totalCount: 0,
};

const getTotlalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_GOODS_CART": {
      const currentGoodsItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentGoodsItems,
          totalPrice: getTotlalPrice(currentGoodsItems),
        },
      };
      const items = Object.values(newItems).map((obj) => obj.items);
      const allGoods = [].concat.apply([], items);
      const totalPrice = getTotlalPrice(allGoods);

      return {
        ...state,
        items: newItems,
        totalCount: allGoods.length,
        totalPrice,
      };
    }

    default:
      return state;
  }
};

export default cart;
