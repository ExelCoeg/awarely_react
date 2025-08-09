import axios from "axios";

export const api = axios.create({
  baseURL: "https://awarely-express.onrender.com/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
