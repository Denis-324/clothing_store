import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchGoods = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `/goods?${category !== null ? `category=${category}` : ""}&_sort=${
        sortBy.type
      }&_order=asc`
    )
    .then(({ data }) => {
      dispatch(setGoods(data));
    });
};

export const setGoods = (items) => ({
  type: "SET_GOODS",
  payload: items,
});
