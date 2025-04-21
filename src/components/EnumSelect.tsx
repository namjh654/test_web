import { EnumSelectProps } from "../types/Common/type";

function EnumSelect<T extends string>({
    value,
    onChange,
    options,
    className = "",
  }: EnumSelectProps<T>) {
    return (
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
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
  
  export default EnumSelect;