import DatePicker from "react-datepicker";
import { DateType } from "../types/Date/type";
import "react-datepicker/dist/react-datepicker.css";

const DateRangePicker = ({
  startDate,
  endDate,
  onChangeStart,
  onChangeEnd,
}: DateType) => {
  return (
    <div className="flex justify-end gap-2">
      <DatePicker
        selected={startDate}
        onChange={onChangeStart}
        showTimeSelect={false}
        dateFormat="yyyy-MM-dd HH:mm"
        placeholderText="시작일 선택"
        popperPlacement="bottom-end"
        portalId="root"
        className="react-datepicker" // For outer wrapper
        wrapperClassName="w-auto"
        shouldCloseOnSelect={true}
        customInput={
          <input
            className="border border-gray-300 rounded px-2 py-2 text-sm w-36"
            placeholder="시작일 선택"
          />
        }
      />

      <DatePicker
        selected={endDate}
        onChange={onChangeEnd}
        showTimeSelect={false}
        dateFormat="yyyy-MM-dd HH:mm"
        placeholderText="종료일 선택"
        popperPlacement="bottom-end"
        portalId="root"
        className="react-datepicker"
        wrapperClassName="w-auto"
        customInput={
          <input
            className="border border-gray-300 rounded px-2 py-2 text-sm w-36"
            placeholder="종료일 선택"
          />
        }
      />
    </div>
  );
};

export default DateRangePicker;
