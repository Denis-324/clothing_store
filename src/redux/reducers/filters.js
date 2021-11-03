// const initialState = {
//   category: null,
//   sortBy: "popular",
// };
const initialState = {
  category: null,
  sortBy: {
    type: "popylar",
  },
};

const filters = (state = initialState, action) => {
  if (action.type === "SET_SORT_BY") {
    return {
      ...state,
      sortBy: action.payload,
    };
  }
  if (action.type === "SET_CATEGORY") {
    return {
      ...state,
      category: action.payload,
    };
  }
  return state;
};

export default filters;
