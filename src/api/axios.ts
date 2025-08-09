import axios from "axios";

export const api = axios.create({
  baseURL: "https://awarely-express.onrender.com/api",
  withCredentials: true,
});

export default api;
