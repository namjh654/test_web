// common.ts
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { axiosInstance } from './AxiosInstance';
import { FieldValues } from 'react-hook-form';

// 🔹 내부 API 요청 모듈 (모듈 패턴)
const apiClient = {
  get: <T>(url: string, params?: object) =>
    axiosInstance.get<T>(url, { params }).then((res) => res.data),

  _post: <T, D>(url: string, data: D) =>
    axiosInstance.post<T>(url, data).then((res) => res.data),

  _put: <T, D>(url: string, data: D) =>
    axiosInstance.put<T>(url, data).then((res) => res.data),

  _patch: <T, D>(url: string, data: D) =>
    axiosInstance.patch<T>(url, data).then((res) => res.data),

  _delete: <T>(url: string, params?: object) =>
    axiosInstance.delete<T>(url, { params }).then((res) => res.data),

  getMutationFn(method: 'post' | 'put' | 'patch' | 'delete', url: string) {
    switch (method) {
      case 'post':
        return <T, D>(data: D) => this._post<T, D>(url, data);
      case 'put':
        return <T, D>(data: D) => this._put<T, D>(url, data);
      case 'patch':
        return <T, D>(data: D) => this._patch<T, D>(url, data);
      case 'delete':
        return <T>(params?: object) => this._delete<T>(url, params);
    }
  }
};

// 🔹 GET 요청용 fetcher (ex: useSWR, useQuery 등)
export const fetcher = <T>(url: string, params?: object) =>
  apiClient.get<T>(url, params);

// 🔹 POST / PUT / PATCH / DELETE 전용 커스텀 훅
export const useGeneralMutation =<T>(
  method: 'post' | 'put' | 'patch' | 'delete',
  url: string,
  queryKey?: string,
  config?: object,
) => {
  const queryClient = useQueryClient();
  const mutationFn = apiClient.getMutationFn(method, url)as (data: FieldValues) => Promise<T>;

  return useMutation<T, unknown, FieldValues>({
    mutationFn:mutationFn,
    mutationKey: [queryKey],
    onSuccess: (data) => {
      // T 타입에 맞춰 data.code 접근
      if (data && queryKey) {
        queryClient.invalidateQueries({ queryKey: [queryKey] });
      }
      console.log('res success : ',data);
    },
    ...config,
  });
};
