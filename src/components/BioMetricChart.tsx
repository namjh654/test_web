import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BioMetricGraph } from "../types/BioMetric/type";

interface Props {
  data: BioMetricGraph;
}

export const BioMetricChart = ({ data }: Props) => {

  const chartData = data.x.map((date, index) => ({
    date,
    heartRate: data.y[index],
  }));

  return (
    <div>
      <div className="text-sm text-gray-600 mb-2">
        📅 최근 측정일: {data.recentDate}
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="heartRate" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
