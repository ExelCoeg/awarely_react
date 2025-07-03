import React from "react";
import Button from "./Button";
interface FeaturesCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  imageUrl?: string;
  backgroundColor?: string;
}

const FeaturesCard: React.FC<FeaturesCardProps> = ({
  title = "",
  subtitle = "",
  description = "",
  buttonText = "",
  imageUrl = "",
  backgroundColor = "bg-orange-100",
}) => {
  return (
    <div
      className={`${backgroundColor} p-5 rounded-2xl max-w-110 max-h-80 my-5`}
    >
      <div className="flex flex-row items-center mb-3 ">
        <img
          src={imageUrl}
          alt=""
          className="w-12 h-12 p-2 mr-2 rounded-lg bg-primary"
        />
        <div>
          <h3 className="font-sans text-2xl font-bold">{title}</h3>
          <p className="font-sans italic text-black">{subtitle}</p>
        </div>
      </div>
      <p className="mb-3 font-sans text-sm">{description}</p>
      <Button text={buttonText} />
    </div>
  );
};

export default FeaturesCard;
