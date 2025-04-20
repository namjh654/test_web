import axios from "axios";

export const axiosInstance = axios.create({
  // baseURL: "https://api.example.com",
  // baseURL: "/",
  timeout: 5000,
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    console.log("요청:", config);
    return config;
  },
  (error) => {
    console.error("요청 에러:", error);
    return Promise.reject(error);
  }
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("응답 에러:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);
