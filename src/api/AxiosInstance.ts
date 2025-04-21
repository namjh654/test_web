import axios from "axios";

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
    const token ='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGUiOiJST0xFX1NVUEVSX0FETUlOIiwiZXhwIjoxNzQ1ODAwMTI1fQ.8S0-DYII30Zo7lPRTG6Tkso7tBZ30eSBTdTEKQnQaKs';

    config.headers.Authorization = `Bearer ${token}`

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
