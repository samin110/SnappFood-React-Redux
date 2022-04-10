import { http } from "../api";

export const postRequest = (url, data) => {
  return http.post(url, data);
};
