// export interface BioMetricHeartRateItem {
//   date: string; // 예: "2025-04-14"
//   heartRate: number; // 심박수
// }

import { PagingInfo } from "../Pagenation/type";

export interface BloodPressurePoint {
  bloodPressureMaximum: number;
  bloodPressureMinimum: number;
}

export interface DeviceSensorPoint {
  lightLevel: number;   // 소수점 포함
  proximity: number;    // 정수
}

export interface BioMetricGraph {
    x: string[],
    y:string[] | BloodPressurePoint[]|DeviceSensorPoint[],
    recentDate: string
}



// 생체 정보 타입
export enum BiometricType {
  BLOOD_GLUCOSE = 'BLOOD_GLUCOSE',
  BLOOD_PRESSURE = 'BLOOD_PRESSURE',
  DEVICE_SENSOR = 'DEVICE_SENSOR',
  HRV = 'HRV',
  OXYGEN = 'OXYGEN',
  PULSE = 'PULSE',
  RESPIRATORY_RATE = 'RESPIRATORY_RATE',
  SCREEN_TIME = 'SCREEN_TIME',
  SKIN_TEMPERATURE = 'SKIN_TEMPERATURE',
  SLEEP = 'SLEEP',
  STEP = 'STEP',
  TEMPERATURE = 'TEMPERATURE',
}

// 조회 단위
export enum BiometricSelectType {
  MINUTE = 'minute',
  HOUR = 'hour',
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
}



export interface BioMetricParams {
  memberSeqNo: number;
  biometricType: BiometricType;
  biometricSelectType: BiometricSelectType;
  start?: string;
  end?: string;
  page?: number;
  size?: number;
}

export interface BioMetricItem {
  id: number;
  measurementDate: string; // 예: "2025-04-18"
  deviceName: string; // 예: "inPHR Band"
  status: 'NORMAL' | 'WARNING';
}

// 전체 생체 정보 리스트 응답 데이터 (페이지네이션 포함)
export interface BioMetricResponse {
  paging:PagingInfo;
  data: BioMetricItem[]; 
}