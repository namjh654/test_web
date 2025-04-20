/** 리엑트 쿼리 함수 모음 */

import { fetcher } from "../api/fetcher";
import {
  BioMetricHeartRateItem,
  BioMetricParams,
  BioMetricResponse,
} from "../types/BioMetric/type";

export const getBioMetricChartData = async (
  userId: number
): Promise<BioMetricHeartRateItem[]> => {
  // fetcher 호출 후 결과를 await하고 반환
  const data = await fetcher<BioMetricHeartRateItem[], { userId: number }>(
    "/mock/mock_bioheartrate.json",
    { userId }
  );
  return data; // 결과 반환
};

export const getBioMetrics = async (
  params: BioMetricParams
): Promise<BioMetricResponse> => {
  const response = await fetcher<BioMetricResponse, BioMetricParams>(
    "/api/biometrics",
    params
  );

  if (!Array.isArray(response.data)) {
    throw new Error("Data is not an array");
  }

  return response; // 페이지네이션 처리된 목록 데이터 반환
};
