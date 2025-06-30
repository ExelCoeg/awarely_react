import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  alignment?: "left" | "center" | "right";
  size?: "small" | "medium" | "large";
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  description,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  size = "large",
  alignment = "left",
}) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  // Tailwind text size classes based on size prop
  const titleSizeMap = {
    small: "text-3xl sm:text-4xl",
    medium: "text-5xl sm:text-6xl",
    large: "text-7xl sm:text-8xl",
  };

  const subtitleSizeMap = {
    small: "text-base sm:text-lg",
    medium: "text-lg sm:text-xl",
    large: "text-xl sm:text-2xl",
  };

  const descriptionSizeMap = {
    small: "text-sm sm:text-base",
    medium: "text-base sm:text-lg",
    large: "text-lg sm:text-xl",
  };

  return (
    <div className={`mb-8 ${alignmentClasses[alignment]} ${className}`}>
      <h2
        className={`${titleSizeMap[size]} font-bold text-primary font-sans leading-tight mb-2 ${titleClassName}`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`${subtitleSizeMap[size]} text-black font-sans font-bold max-w-xs ${
            alignment === "center" ? "mx-auto" : ""
          } ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      )}

      {description && (
        <p
          className={`${descriptionSizeMap[size]} text-gray-700 max-w-sm mt-4 ${
            alignment === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
