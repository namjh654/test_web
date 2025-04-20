import React, { useState } from "react";
import { useBioMetric, useBioMetricList } from "../hooks/useBioMetric";
import { Pagination } from "../components/Pagination";
import { BioMetricChart } from "../components/BioMetricChart";
import { BioMetricTable } from "../components/BioMetricTable";

export const BioMetricPage: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10); // 기본 사이즈 설정

  // 단일 사용자 심박수 (최근 7일)
  const { data: chartData, isLoading: isChartLoading } = useBioMetric(1);

  // 전체 사용자 리스트 (페이지네이션 및 사이즈 반영)
  const {
    data: listData,
    isLoading: isListLoading,
    isFetching,
  } = useBioMetricList({
    id: 1,
    type: "heartRate",
    date: "2025-04-20",
    page, // 페이지 값 연동
    size, // 사이즈 값 연동
  });

  // 로딩 중이면 로딩 표시
  if (isChartLoading || isListLoading) {
    return <div>로딩 중...</div>;
  }
  return (
    <div className="p-6 space-y-6">
      <section>
        <h2 className="text-xl font-bold mb-2">👤 사용자 심박수 (최근 7일)</h2>
        {Array.isArray(chartData) && chartData.length > 0 ? (
          <BioMetricChart data={chartData} />
        ) : (
          <p>심박수 데이터 없음</p>
        )}
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">📋 전체 사용자 생체 정보</h2>
        {isFetching && <p className="text-gray-500">데이터 갱신 중...</p>}
        {listData ? (
          <>
            <BioMetricTable data={listData.data} />
            {/* 사이즈와 데이터 전달 */}
            <Pagination
              page={page}
              total={listData.totalCount}
              size={size}
              onPageChange={(newPage: number) => setPage(newPage)} // 페이지 번호 변경 시
              onSizeChange={(newSize: number) => setSize(newSize)} // 사이즈 변경 시
            />
          </>
        ) : (
          <p>리스트 데이터 없음</p>
        )}
      </section>
    </div>
  );
};
