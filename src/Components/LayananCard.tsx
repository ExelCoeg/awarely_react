import React from "react";
import Button from "./Button";

interface LayananCardProps {
  title: string;
  subtitle?: string;
  description?: string;
}

const LayananCard: React.FC<LayananCardProps> = ({
  title = "",
  subtitle = "",
  description = "",
}) => {
  return (
    <div className="mx-2 my-20 rounded-xl bg-primary max-w-100 h-120">
      <div className="relative flex items-center justify-center h-20 m-auto font-sans text-2xl font-bold text-center text-white bottom-10 w-80 rounded-xl bg-primary-dark">
        {title}
      </div>
      <div className="px-10">
        <p className="mt-2 font-sans text-sm font-bold text-center text-white">
          {subtitle}
        </p>
        <hr className="my-5 border-white" />
        <p className="font-sans text-xs leading-8 text-center text-white">
          {description}
        </p>
      </div>
      <div className="flex items-center justify-center mt-5 text-primary">
        <Button
          text={"Buat Janji"}
          color="orange-100"
          textColor="primary"
          borderRadius="rounded-partial"
        />
      </div>
    </div>
  );
};

export default LayananCard;
