import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  GET_USER_FROM_LOCALSTORAGE,
} from "../actions/actionUsers/usersActionTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true };

    case FETCH_USER_SUCCESS:
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      return { loading: false, data: [action.payload], error: "" };

    case FETCH_USER_FAILURE:
      return { loading: false, data: [], error: action.payload };

    case GET_USER_FROM_LOCALSTORAGE:
      return { loading: false, error: "", data: [action.payload] || [] };

    default:
      return state;
  }
};
