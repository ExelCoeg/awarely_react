import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
  color?: string;
  textColor?: string;
  arrow?: boolean;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  className = "",
  variant = "primary",
  arrow = true,
  href = "",
  onClick,
}) => {
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary-light",
    secondary: "bg-orange-100 hover:bg-orange-50 text-primary",
    tertiary: "bg-white text-primary border border-primary hover:bg-gray-100",
  };
  return (
    <button
      className={`py-2 rounded-full ${variantClasses[variant]} lg:text-lg px-5 text-center font-bold cursor-pointer font-sans ${className} `}
      onClick={onClick}
    >
      <Link to={href}>
        {text} {arrow && <ArrowRight className="inline ml-1" />}
      </Link>
    </button>
  );
};

export default Button;
