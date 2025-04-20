import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../quries/queryKey";
import { getBioMetricChartData, getBioMetrics } from "../quries/queryFn";
import {
  BioMetricHeartRateItem,
  BioMetricParams,
  BioMetricResponse,
} from "../types/BioMetric/type";

export const useBioMetric = (userId: number) => {
  return useQuery<BioMetricHeartRateItem[]>({
    queryKey: [QUERY_KEYS.BIOMETRIC, userId],
    queryFn: () => getBioMetricChartData(userId),
    placeholderData: keepPreviousData,
    // staleTime: 1000 * 60 * 5,
    retry: 0,
  });
};

export const useBioMetricList = (params: BioMetricParams) => {
  return useQuery<BioMetricResponse>({
    queryKey: [QUERY_KEYS.BIOMETRIC_LIST, params.page, params.size],
    queryFn: () => getBioMetrics(params),
    placeholderData: keepPreviousData,
    // staleTime: 1000 * 60 * 5,
    retry: 0,
  });
};
