import React from "react";

interface InputFieldProps {
  label?: string;
  labelColor?: string;
  placeholder?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label = "Email",
  labelColor = "",
  placeholder = "Masukkan email",
  type = "email",
  className = "",
  disabled = false,
  onChange,
}) => {
  return (
    <div className="flex flex-col w-full font-sans">
      <label className={`${labelColor} mb-2 text-lg font-semibold`}>
        {label}
      </label>
      <input
        type={type}
        disabled={disabled}
        className={`p-5 font-medium border border-gray-300 h-15 ${disabled == true ? "bg-gray-200" : "bg-white"} ${className} rounded-xl`}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
