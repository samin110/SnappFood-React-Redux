import { postRequest } from "../../../Api/Requests/PostRequest";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  GET_USER_FROM_LOCALSTORAGE,
} from "./usersActionTypes";

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (data) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: data,
  };
};

export const fetchUserfailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

export const signupUsers = (data) => {
  return (dispatch) => {
    dispatch(fetchUserRequest);
    postRequest("/users/signup", data)
      .then((res) => {
        console.log(res);
        dispatch(fetchUserSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchUserfailure(error.response.data.message));
      });
  };
};

export const loginUser = (data) => {
  return (dispatch) => {
    dispatch(fetchUserRequest);
    postRequest("/users/login", data)
      .then((res) => {
        console.log(res.data);
        dispatch(fetchUserSuccess(res.data));
      })

      .catch((error) => {
        dispatch(fetchUserfailure(error.response.data.message));
      });
  };
};

export const getFromLocalStorage = (data) => {
  return {
    type: GET_USER_FROM_LOCALSTORAGE,
    payload: data,
  };
};
