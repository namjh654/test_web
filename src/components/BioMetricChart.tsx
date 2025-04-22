import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  BioMetricGraph,
  BiometricType,
  DeviceSensorPoint,
} from "../types/BioMetric/type";
import { BIOMETRIC_Y_AXIS_RANGE } from "../constants/chartRanges";

interface Props {
  data: BioMetricGraph;
  type: BiometricType;
}

export const BioMetricChart = ({ data, type }: Props) => {
  let chartData: any[] = [];

  if (type === BiometricType.DEVICE_SENSOR) {
    chartData = data.x.map((date, index) => {
      const point = data.y[index] as DeviceSensorPoint;
      return {
        date,
        lightLevel: Number(point?.lightLevel ?? 0).toFixed(2), // ✅ 안전하게 처리
        proximity: point?.proximity ?? 0,
      };
    });
  } else {
    chartData = data.x.map((date, index) => ({
      date,
      value: Number(data.y[index]),
    }));
  }

  return (
    <div>
      <div className="text-sm text-gray-600 mb-2">
        📅 최근 측정일: {data.recentDate}
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={BIOMETRIC_Y_AXIS_RANGE[type] ?? ["auto", "auto"]} />
          <Tooltip
            formatter={(value, name) =>
              name === "조도(lux)" ? `${Number(value).toFixed(2)} lux` : `${value}`
            }
          />

          {type === BiometricType.DEVICE_SENSOR ? (
            <>
              <Line dataKey="lightLevel" stroke="#ffa726" name="조도(lux)" />
              <Line dataKey="proximity" stroke="#66bb6a" name="근접" />
            </>
          ) : (
            <Line
              dataKey="value"
              stroke="#8884d8"
              name={type.replace(/_/g, " ")}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
