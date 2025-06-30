import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  text: string;
  borderRadius?: "rounded-full" | "rounded-partial" | "rounded-none";
  size?: "small" | "medium" | "large";
  color?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  size = "small",
  borderRadius = "rounded-full",
  color = "primary",
  textColor = "white",
}) => {
  const sizeClasses = {
    small: "text-2xs px-5 py-2",
    medium: "text-3xs px-6 py-3",
    large: "text-lg px-8 py-4",
  };
  const borderRadiusClasses = {
    "rounded-full": "rounded-full",
    "rounded-partial": "rounded-lg",
    "rounded-none": "rounded-none",
  };
  return (
    <button
      className={`${borderRadiusClasses[borderRadius]} ${sizeClasses[size]} text-left font-bold bg-${color} text-${textColor} hover:bg-primary-light cursor-pointer font-sans `}
    >
      {text} <ArrowRight className="inline ml-1" />
    </button>
  );
};

export default Button;
