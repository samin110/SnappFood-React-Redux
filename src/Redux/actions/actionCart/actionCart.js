import { toast } from "react-hot-toast";
import { ADD_TO_CART, DECREMENT_QUANTITY_OF_CART, DELETE_FROM_CART } from "./actionType";

export const addToCart = (data) => {
  toast.success(`یک عدد ${data.name} به سبد محصولات اضافه شد`, {
    style: {
      fontSize: "14px",
      background: "#333",
      color: "#fff",
    },
  });
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
