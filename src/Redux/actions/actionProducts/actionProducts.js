import { toast } from "react-hot-toast";
import { getRequest } from "../../../Api/Requests/GetRequest";
import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from "./actionTypeProducts";

export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchProductsSuccess = (data) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: data,
  };
};

export const fetchProductsFailure = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};

export const getProductsFromDB = () => {
  return async (dispatch) => {
    dispatch(fetchProductsRequest);
    await getRequest("/products")
      .then((res) => {
        dispatch(fetchProductsSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error.message));
        if (error)
          toast.error("خطا در برقراری ارتباط با سرور !!!", {
            style: {
              borderRadius: "10px",
              fontSize: "15px",
              background: "#333",
              color: "#fff",
            },
          });
      });
  };
};
