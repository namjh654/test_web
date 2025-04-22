/** 리엑트 쿼리 함수 모음 */

import { FieldValues } from "react-hook-form";
import {
  BioMetricGraph,
  BioMetricParams,
  BioMetricResponse,
} from "../types/BioMetric/type";
import { LoginResponse } from "../types/User/type";
import { fetcher } from "../api/Common";

//로그인 정보 가져오기

// export const postLogin = async(params:FieldValues) : Promise<LoginResponse> => {
  
//   const response = await useApiMutation({
    
//   })

// }

/** 바이오 정보 가져오기 */

export const getBioMetricChartData =  (
  params: BioMetricParams
): Promise<BioMetricGraph> => {
  // fetcher 호출 후 결과를 await하고 반환
    const { memberSeqNo, biometricType, biometricSelectType, ...query } = params;
    const path = `/api/biometric/graph/${memberSeqNo}/${biometricType}/${biometricSelectType}`;
  
  const data = fetcher<BioMetricGraph>(path,query);
  console.log("📋 BioMetric graph Response:", data);
  return data; // 결과 반환
};

export const getBioMetrics = (
  params: BioMetricParams
): Promise<BioMetricResponse> => {
  const { memberSeqNo, biometricType, biometricSelectType, ...query } = params;

  const path = `/api/biometric/${memberSeqNo}/${biometricType}/${biometricSelectType}`;
  
  const data = fetcher<BioMetricResponse>(path, query);
  console.log("📋 BioMetric List Response:", data);

  return data;
};


