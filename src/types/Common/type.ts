// 공통 응답 타입 제네릭
export interface ApiResponse<T> {
  data: T;
  message?: string;
  status?: number;
}

export interface EnumSelectProps<T> {
  value: T;
  onChange: (value: T) => void;
  options: T[];
  className?: string;
}