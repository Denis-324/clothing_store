import axios from "axios";
// import { useDispatch } from "react-redux";

export const fetchGoods = () => (dispatch) => {
  // const dispatch = useDispatch();
  axios.get("http://localhost:3001/goods").then(({ data }) => {
    dispatch(setGoods(data));
  });
};

export const setGoods = (items) => ({
  type: "SET_GOODS",
  payload: items,
});
