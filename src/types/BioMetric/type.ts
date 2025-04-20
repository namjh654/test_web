export interface BioMetricHeartRateItem {
  date: string; // 예: "2025-04-14"
  heartRate: number; // 심박수
}

// 개별 생체 정보 항목 (각 생체 정보 아이템)
export interface BioMetricItem {
  id: number; // 데이터 고유 ID
  userId: number; // 사용자 ID
  device: string; // 사용한 디바이스 (예: SmartWatch, FitBand, SmartRing)
  timestamp: string; // 타임스탬프 (ISO 형식, 예: "2025-04-20T08:00:00Z")
  heartRate: number; // 심박수
  temperature: number; // 체온
  status: "normal" | "warning"; // 상태 (정상/경고)
}

// 전체 생체 정보 리스트 응답 데이터 (페이지네이션 포함)
export interface BioMetricResponse {
  totalCount: number; // 전체 데이터 개수
  page: number; // 현재 페이지
  size: number; // 페이지당 데이터 개수
  data: BioMetricItem[]; // 생체 정보 데이터 배열
}

// 쿼리 파라미터 (생체 정보 요청에 필요한 파라미터)
export interface BioMetricParams {
  id: number; // 사용자 ID
  type: string; // 요청할 데이터 유형 (예: heartRate, temperature 등)
  date: string; // 요청 날짜 (예: "2025-04-20")
  page?: number; // 페이지 번호 (선택 사항, 기본값 1)
  size?: number; // 페이지당 항목 수 (선택 사항, 기본값 10)
}
