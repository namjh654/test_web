import React, { useState } from "react";
import { useBioMetric, useBioMetricList } from "../hooks/useBioMetric";
import { Pagination } from "../components/Pagination";
import { BioMetricChart } from "../components/BioMetricChart";
import { BioMetricTable } from "../components/BioMetricTable";
import { BiometricType, BiometricSelectType } from "../types/BioMetric/type";

export const BioMetricPage: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(2); // 기본 사이즈 설정


  const memberSeqNo = 30024;
  const biometricType = BiometricType.PULSE;
  const testBioType = BiometricType.STEP;
  const biometricSelectType = BiometricSelectType.DAY;
  const start = "2025-01-01 01:00";
  const end = "2025-12-01 01:00";

  const { data: chartData, isLoading: isChartLoading } = useBioMetric({
    memberSeqNo,
    biometricType:testBioType,
    biometricSelectType,
    start,
    end
  });


  // 전체 사용자 리스트 (페이지네이션 및 사이즈 반영)
  const {
    data: listData,
    isLoading: isListLoading,
    isFetching,
  } = useBioMetricList({
    memberSeqNo,
    biometricType,
    biometricSelectType,
    start,
    end,
    page,
    size,
  });

  // 로딩 중이면 로딩 표시
  if (isChartLoading || isListLoading) {
    return <div>로딩 중...</div>;
  }
  return (
    <div className="p-6 space-y-6">
      <section>
        <h2 className="text-xl font-bold mb-2">👤 생체 정보 그래프 및 리스트</h2>
        {chartData && chartData.x.length > 0 && chartData.y.length > 0 ? (
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
              total={listData.paging.total}
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
