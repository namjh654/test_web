import axios from "axios";
import { getToken, removeCookie } from "../utils/cookie";

export const axiosInstance = axios.create({
  // baseURL: "https://api.example.com",
  baseURL: import.meta.env.BASE_URL,
  timeout: 5000,
  withCredentials: true, // 필요 시
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    // 토큰 하드코딩
    // const token ='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGUiOiJST0xFX1NVUEVSX0FETUlOIiwiZXhwIjoxNzQ1ODE4MzU4fQ.0ZYPDJngNSSW7Maz47N8w-py_KnwDGACIe9qpvUsxkg';
    // config.headers.Authorization = `Bearer ${token}`
// 
    const token = getToken();
    try {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    } catch (err) {
      console.error('[_axios.interceptors.request] config : ' + err);
    }
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
    if (error.response.data.code === 401) {
      removeCookie();
    }
    return Promise.reject(error);
  }
);
