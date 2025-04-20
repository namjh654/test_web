import { BioMetricItem } from "../types/BioMetric/type";

interface Props {
  data: BioMetricItem[];
}

export const BioMetricTable = ({ data }: Props) => {
  if (!data || !Array.isArray(data)) return <p>표시할 데이터가 없습니다.</p>;

  // size만큼 잘라서 사용

  return (
    <table className="w-full border">
      <thead>
        <tr className="bg-gray-100">
          <th>ID</th>
          <th>디바이스</th>
          <th>타임스탬프</th>
          <th>심박수</th>
          <th>체온</th>
          <th>상태</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="text-center border-t">
            <td>{item.id}</td>
            <td>{item.device}</td>
            <td>{new Date(item.timestamp).toLocaleString("ko-KR")}</td>
            <td>{item.heartRate}</td>
            <td>{item.temperature}°C</td>
            <td>{item.status === "normal" ? "정상" : "경고"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
