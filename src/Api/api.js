import axios from "axios";

axios.defaults.baseURL = "https://snappfood-clone.onrender.com/api";

export const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
};
