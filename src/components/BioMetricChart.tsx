import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BioMetricHeartRateItem } from "../types/BioMetric/type";

interface Props {
  data: BioMetricHeartRateItem[];
}

export const BioMetricChart = ({ data }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="heartRate" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};
