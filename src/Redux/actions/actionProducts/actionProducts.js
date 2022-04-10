import { getRequest } from "../../../Api/Requests/GetRequest";
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from "./actionTypeProducts";

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
    type: FETCH_PRODUCTS_SUCCESS,
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
        dispatch(fetchProductsFailure(error.response.data.message));
      });
  };
};
