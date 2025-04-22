import React, { useCallback, useId } from "react";
import { EnumSelectProps } from "../types/Common/type";

function EnumSelectInner<T extends string>({
  value,
  onChange,
  options,
  className = "",
}: EnumSelectProps<T>) {
  const id = useId();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onChange(e.target.value as T);
    },
    [onChange]
  );

  return (
    <select
      id={id}
      value={value}
      onChange={handleChange}
      className={`border border-gray-300 rounded px-2 py-1 text-sm w-full ${className}`}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option.replace(/_/g, " ").toUpperCase()}
        </option>
      ))}
    </select>
  );
}

const EnumSelect = React.memo(EnumSelectInner) as typeof EnumSelectInner;


export default EnumSelect;
