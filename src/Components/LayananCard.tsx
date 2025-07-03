import React from "react";
import Button from "./Button";
import Badge from "./Badge";

interface LayananCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  badgeText?: string;
}

const LayananCard: React.FC<LayananCardProps> = ({
  title = "",
  subtitle = "",
  description = "",
  badgeText = "",
}) => {
  return (
    <div className="z-0 mx-2 my-10 font-sans text-white rounded-xl bg-primary max-w-120 lg:max-w-150 h-135 lg:h-180 xl:h-170">
      <div className="relative flex items-center justify-center h-20 m-auto text-2xl font-bold text-center lg:text-3xl bottom-10 w-90 lg:w-90 rounded-xl bg-primary-dark">
        <p>{title}</p>
      </div>
      <div className="">
        <p className="mt-2 text-sm font-bold text-center text-white leading-20 lg:text-lg">
          {subtitle}
        </p>
      </div>
      <div className="px-10 lg:mb-10">
        <hr className="my-5 border-white lg:my-10 " />
        <p className="text-xs leading-8 text-center text-white lg:text-lg">
          {description}
        </p>
      </div>
      <div className="flex items-center justify-center mt-5">
        <Badge text={badgeText} />
      </div>
      <div className="flex items-center justify-center mt-5 text-primary">
        <Button text={"Buat Janji"} variant="secondary" textColor="primary" />
      </div>
    </div>
  );
};

export default LayananCard;
