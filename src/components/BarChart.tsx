import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  BarChart,
  ReferenceLine,
} from "recharts";
import { BioMetricGraph, BloodPressurePoint } from "../types/BioMetric/type";

interface Props {
  data: BioMetricGraph;
}

const BloodPressureBarChart = ({ data }: Props) => {
  const chartData = data.x.map((date, index) => {
    const bp = data.y[index] as BloodPressurePoint;
    const min = bp?.bloodPressureMinimum ?? 0;
    const max = bp?.bloodPressureMaximum ?? 0;
    return {
      date,
      base: min,
      range: max - min,
    };
  });

  return (
    <div>
      <div className="text-sm text-gray-600 mb-2">
        📅 최근 측정일: {data.recentDate}
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={[40, 200]}>
            <ReferenceLine y={90} stroke="red" strokeDasharray="3 3" label="저혈압" />
            <ReferenceLine y={120} stroke="green" strokeDasharray="3 3" label="정상 상한" />
            <ReferenceLine y={140} stroke="orange" strokeDasharray="3 3" label="1기 고혈압" />
          </YAxis>

          <Tooltip
            formatter={(value, name, props) => {
              const { payload } = props;
              const min = payload.base;
              const max = min + payload.range;
              return [`${min} ~ ${max} mmHg`, "혈압 범위"];
            }}
          />
          <Legend />
          {/* 시작점 바 (숨김용) */}
          <Bar dataKey="base" stackId="a" fill="transparent" />
          {/* 범위 바 */}
          <Bar dataKey="range" stackId="a" fill="#8884d8" name="혈압 범위" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BloodPressureBarChart;
