import React from "react";

interface InputFieldProps {
  label?: string;
  placeholder?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label = "Email",
  placeholder = "Masukkan email",
  type = "email",
  className = "",
  onChange,
}) => {
  return (
    <div>
      <label className="mb-2 text-lg font-semibold">{label}</label>
      <input
        type={type}
        className={`w-full p-5 font-medium border border-gray-300 rounded-xl h-15 ${className}`}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
