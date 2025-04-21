/** 리엑트 쿼리 함수 모음 */

import { fetcher } from "../api/fetcher";
import {
  BioMetricGraph,
  BioMetricParams,
  BioMetricResponse,
} from "../types/BioMetric/type";

export const getBioMetricChartData = async (
  params: BioMetricParams
): Promise<BioMetricGraph> => {
  // fetcher 호출 후 결과를 await하고 반환
    const { memberSeqNo, biometricType, biometricSelectType, ...query } = params;
    const path = `/api/biometric/graph/${memberSeqNo}/${biometricType}/${biometricSelectType}`;
  
  const data = await fetcher<BioMetricGraph,  typeof query>(path,query);
  console.log("📋 BioMetric graph Response:", data);
  return data; // 결과 반환
};

export const getBioMetrics = async (
  params: BioMetricParams
): Promise<BioMetricResponse> => {
  const { memberSeqNo, biometricType, biometricSelectType, ...query } = params;

  const path = `/api/biometric/${memberSeqNo}/${biometricType}/${biometricSelectType}`;
  
  const data = await fetcher<BioMetricResponse, typeof query>(path, query);
  console.log("📋 BioMetric List Response:", data);

  return data;
};


