import React from "react";
interface RadioInputPros {
  label?: string;
  name: string;
  options: { label: string; value: string }[];
  value: string;
  className: string;
  onChange: (val: string) => void;
}

export const RadioInput: React.FC<RadioInputPros> = ({
  label,
  name,
  options,
  value,
  onChange,
  className,
}) => {
  return (
    <div className={`${className} font-sans`}>
      {label && (
        <label className={`mb-2 text-lg font-semibold font-sans`}>
          {label}
        </label>
      )}
      <div className="flex flex-row gap-2">
        {options.map((options) => (
          <label key={options.value} className="flex items-center gap-2">
            <input
              type="radio"
              name={name}
              value={options.value}
              checked={value === options.value}
              onChange={() => onChange(options.value)}
              className="accent-tertiary"
            />
            {options.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioInput;
