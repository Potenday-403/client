import axios from "axios";

export const api = axios.create({
  baseURL: "백엔드URL",
  withCredentials: true,
});
