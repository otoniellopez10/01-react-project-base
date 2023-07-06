import axios from "axios";
import { interceptorErros, interceptorSuccess } from "./interceptors";
import { PATH_API } from "../config";

const axiosInstance = axios.create({
  baseURL: PATH_API.rootV1,
  headers: {
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = "Bearer " + token;
      }
    } catch (error) {
      console.log(error);
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(interceptorSuccess, interceptorErros);

export default axiosInstance;
