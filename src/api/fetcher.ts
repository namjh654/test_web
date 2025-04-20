import { axiosInstance } from "./AxiosInstance";

/**
 * GET
 * @param url API 경로
 * @param params 쿼리 파라미터
 */

export const fetcher = async <
  ResponseData,
  QueryParams = Record<string, unknown>
>(
  url: string,
  params?: QueryParams
): Promise<ResponseData> => {
  console.log("[Fetcher 요청]", url, params);
  try {
    const res = await axiosInstance.get<ResponseData>(url, { params });
    return res.data;
  } catch (error) {
    console.error("[Fetcher 에러]", error);
    throw error;
  }
};
