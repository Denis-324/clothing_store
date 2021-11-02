const initialState = {
  items: [],
  isLoaded: false,
};

const goods = (state = initialState, action) => {
  if (action.type === "SET_GOODS") {
    return {
      ...state,
      items: action.payload,
      isLoaded: true,
    };
  }
  return state;
};

export default goods;
