import { useState } from "react";
import { useBioMetric, useBioMetricList } from "../hooks/useBioMetric";
import { Pagination } from "../components/Pagination";
import { BioMetricChart } from "../components/BioMetricChart";
import { BioMetricTable } from "../components/BioMetricTable";
import { BiometricType, BiometricSelectType } from "../types/BioMetric/type";
import { formatDateTime } from "../utils/date";
import DateRangePicker from "../components/DatePicker";
import EnumSelect from "../components/EnumSelect";
import BloodPressureBarChart from "../components/BarChart";

export const BioMetricPage = () => {
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const [selectedType, setSelectedType] = useState<BiometricType>(
    Object.values(BiometricType)[0]
  );
  const [selectUnit, setSelectUnit] = useState<BiometricSelectType>(
    Object.values(BiometricSelectType)[0]
  );

  const memberSeqNo = 30024;
  const start = startDate && endDate ? formatDateTime(startDate) : undefined;
  const end = startDate && endDate ? formatDateTime(endDate) : undefined;  

  const { data: chartData, isLoading: isChartLoading } = useBioMetric({
    memberSeqNo,
    biometricType: selectedType,
    biometricSelectType: selectUnit,
    start,
    end,
  });

  const {
    data: listData,
    isLoading: isListLoading,
  } = useBioMetricList({
    memberSeqNo,
    biometricType: selectedType,
    biometricSelectType: selectUnit,
    start,
    end,
    page,
    size,
  });

  return (
    <div className="p-6 space-y-6">
      <section className="space-y-4">
      <h2 className="text-xl font-bold">📅 필터</h2>

      <div className="flex justify-between items-start gap-4">
        {/* 기간 선택 */}
        <div className="w-1/2">
          <DateRangePicker
            startDate={startDate}
            endDate={endDate}
            onChangeStart={setStartDate}
            onChangeEnd={setEndDate}
          />
        </div>

        {/* 바이오메트릭 타입 선택 */}
        <div className="flex gap-2 w-full">
          <EnumSelect
            value={selectedType}
            onChange={setSelectedType}
            options={Object.values(BiometricType)}
          />
          <EnumSelect
            value={selectUnit}
            onChange={setSelectUnit}
            options={Object.values(BiometricSelectType)}
          />
        </div>
      </div>
    </section>

      {/* 차트 */}
      <section>
        <h2 className="text-xl font-bold mb-2">👤 생체 정보 그래프</h2>
        {isChartLoading ? (
        <p>차트 로딩 중...</p>
        ) : chartData && chartData.x?.length > 0 ? (
          selectedType === BiometricType.BLOOD_PRESSURE ? (
            <BloodPressureBarChart data={chartData} />
          ) : (
            <BioMetricChart data={chartData} />
          )
        ) : (
          <p>데이터 없음</p>
        )}
      </section>

      {/* 테이블 */}
      <section>
        <h2 className="text-xl font-bold mb-2">📋 전체 사용자 생체 정보 테이블 ({listData?.paging.total}개)</h2>
        
        {isListLoading ? (
          <p>리스트 로딩 중...</p>
        ) : listData ? (
          <>
            <BioMetricTable data={listData.data} />
            <Pagination
              page={page}
              total={listData.paging.total}
              size={size}
              onPageChange={setPage}
              onSizeChange={setSize}
            />
          </>
        ) : (
          <p>리스트 데이터 없음</p>
        )}
      </section>
    </div>
  );
};
