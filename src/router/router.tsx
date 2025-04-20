// src/router/router.ts
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BioMetricPage } from "../pages/BioMetricPage";
import { NotFound } from "../pages/NotFound";

const routes = [
  {
    path: "/",
    element: <BioMetricPage />,
  },
  // 추가 페이지는 여기에 추가 가능
  // {
  //   path: "/new-page",
  //   element: <NewPage />,
  // },
];

const router = createBrowserRouter([
  ...routes, // routes 배열에서 라우터 설정
  {
    path: "*", // 모든 잘못된 경로를 처리
    element: <NotFound />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
