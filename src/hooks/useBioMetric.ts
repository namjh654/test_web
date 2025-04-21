import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../quries/queryKey";
import { getBioMetricChartData, getBioMetrics } from "../quries/queryFn";
import {
  BioMetricGraph,
  BioMetricParams,
  BioMetricResponse,
} from "../types/BioMetric/type";

export const useBioMetric = (params: BioMetricParams) => {
  return useQuery<BioMetricGraph>({
    queryKey: [QUERY_KEYS.BIOMETRIC,  params.memberSeqNo,
      params.biometricType,
      params.biometricSelectType,
      params.start,
      params.end,
      params.page,
      params.size,],
    queryFn: () => getBioMetricChartData(params),
    placeholderData: keepPreviousData,
    // staleTime: 1000 * 60 * 5,
    retry: 0,
  });
};

export const useBioMetricList = (params: BioMetricParams) => {
  return useQuery<BioMetricResponse>({
    queryKey: [
      QUERY_KEYS.BIOMETRIC_LIST,
      params.memberSeqNo,
      params.biometricType,
      params.biometricSelectType,
      params.start,
      params.end,
      params.page,
      params.size,
    ],
    queryFn: () => getBioMetrics(params), // ✅ 여기에 전달되는 타입과 함수 내부가 일치해야 함
    placeholderData: keepPreviousData,
    retry: 0,
  });
};


