// 공통 응답 타입 제네릭
export interface ApiResponse<T> {
  data: T;
  message?: string;
  status?: number;
}
