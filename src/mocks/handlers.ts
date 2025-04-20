import { http, HttpResponse } from "msw";
import biometricData from "./mock_biometric.json"; // mock 데이터가 포함된 파일

export const handlers = [
  http.get("/api/biometrics", ({ request }) => {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") || "1", 10);
    const size = parseInt(url.searchParams.get("size") || "10", 10);

    const start = (page - 1) * size;
    const end = start + size;

    // 실제 데이터로부터 페이지에 맞는 데이터를 잘라서 반환
    const paginatedData = biometricData.data.slice(start, end);

    return HttpResponse.json({
      totalCount: biometricData.totalCount, // 전체 데이터 개수
      page,
      size,
      data: paginatedData, // 잘라낸 데이터 반환
    });
  }),
];
