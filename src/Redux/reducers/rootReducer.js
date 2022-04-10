import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import productsReducer from "./productsReducer";
import { usersReducer } from "./usersReducerAsync";
const rootReducer = combineReducers({
  cartReducer: cartReducer,
  usersReducer: usersReducer,
  productsReducer: productsReducer,
});

export default rootReducer;
