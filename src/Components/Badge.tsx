import React from "react";
import { Dot } from "lucide-react";
interface BadgeProps {
  text: string;
  className?: string;
  borderColor?: string;
}
export const Badge: React.FC<BadgeProps> = ({ text = "", className }) => {
  return (
    <div
      className={`${className} flex items-center justify-center px-5 py-2.5 lg:px-10 lg:py-5 text-xs font-sans max-w-110 lg:max-w-125 h-15 border rounded-l-4xl rounded-r-4xl`}
    >
      <div>
        <Dot size="50"></Dot>
      </div>
      {text}
    </div>
  );
};

export default Badge;
