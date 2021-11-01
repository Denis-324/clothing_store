import { combineReducers } from "redux";
import filtersReducer from "./filters";
import goodsReducer from "./goods";

const rootReducer = combineReducers({
  filters: filtersReducer,
  goods: goodsReducer,
});

export default rootReducer;
