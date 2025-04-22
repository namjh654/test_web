// constants/chartRanges.ts
import { BiometricType } from "../types/BioMetric/type";

export const BIOMETRIC_Y_AXIS_RANGE: Record<
  BiometricType,
  [number, number]
> = {
  [BiometricType.BLOOD_PRESSURE]: [40, 200], // 범위는 BarChart에서 따로 사용
  [BiometricType.TEMPERATURE]: [35, 42],
  [BiometricType.SKIN_TEMPERATURE]: [30, 42],
  [BiometricType.PULSE]: [40, 180],
  [BiometricType.STEP]: [0, 10000],
  [BiometricType.SLEEP]: [0, 12],
  [BiometricType.OXYGEN]: [80, 100],
  [BiometricType.HRV]: [0, 100],
  [BiometricType.RESPIRATORY_RATE]: [10, 30],
  [BiometricType.SCREEN_TIME]: [0, 24],
  [BiometricType.BLOOD_GLUCOSE]: [60, 180],
  [BiometricType.DEVICE_SENSOR]: [0, 1000],
};
