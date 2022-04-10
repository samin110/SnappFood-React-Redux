import { http } from "../api";

export const getRequest = (url) => {
  return http.get(url);
};
