import {
  ADD_TO_CART,
  DECREMENT_QUANTITY_OF_CART,
  DELETE_FROM_CART,
} from "./actionType";

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};

export const deleteFromCart = (id) => {
  return {
    type: DELETE_FROM_CART,
    payload: id,
  };
};

export const decrementQuantityOfOrder = (id) => {
  return {
    type: DECREMENT_QUANTITY_OF_CART,
    payload: id,
  };
};
