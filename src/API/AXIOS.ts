import axios from "axios";

export const API_BASE_URL =
  process.env.NODE_ENV ==="production"
    ? "https://edmas-mus6a.ondigitalocean.app/api"
    : "http://localhost:9090/api";

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "content-type": "application/json",
  },
});

export default axiosInstance;
