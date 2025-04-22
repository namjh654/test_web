import { useMemo } from "react";
import { UserTableProps } from "../types/Table/type";


export const BioMetricTable = ({ data }: UserTableProps) => {
  const rows = useMemo(() => {
    if (!Array.isArray(data)) return null;

    return data.map((item) => (
      <tr key={item.id} className="text-center border-t">
        <td>{item.id}</td>
        <td>{item.deviceName ?? "N/A"}</td>
        <td>{item.measurementDate}</td>
        <td>{item.status === "NORMAL" ? "정상" : "경고"}</td>
      </tr>
    ));
  }, [data]);

  if (!rows || rows.length === 0) {
    return (
      <div className="text-center text-gray-500 p-4">표시할 데이터가 없습니다.</div>
    );
  }

  return (
    <table className="w-full border">
      <thead>
        <tr className="bg-gray-100">
          <th>ID</th>
          <th>디바이스</th>
          <th>측정일</th>
          <th>상태</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
};
