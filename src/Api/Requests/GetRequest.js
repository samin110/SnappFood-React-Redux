import { http } from "../api";

export const getRequest = () => {
  return http.get("/users");
};
