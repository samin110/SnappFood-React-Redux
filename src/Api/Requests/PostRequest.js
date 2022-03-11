import { http } from "../api";

export const postRequest = (data) => {
  return http.post("/users", data);
};
