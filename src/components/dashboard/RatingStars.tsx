import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  rating?: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  onChange?: (rating: number) => void;
  readOnly?: boolean;
  className?: string;
}

const RatingStars = ({
  rating = 5,
  maxRating = 10,
  size = "md",
  onChange = () => {},
  readOnly = false,
  className = "",
}: RatingStarsProps) => {
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };

  return (
    <div className={cn("flex items-center gap-1 bg-white p-1", className)}>
      {Array.from({ length: maxRating }).map((_, index) => (
        <Star
          key={index}
          className={cn(
            sizeClasses[size],
            "transition-colors duration-200",
            index < rating
              ? "text-yellow-400 fill-yellow-400"
              : "text-gray-300 hover:text-yellow-200",
            !readOnly && "cursor-pointer",
          )}
          onClick={() => !readOnly && onChange(index + 1)}
          role={!readOnly ? "button" : undefined}
          tabIndex={!readOnly ? 0 : undefined}
          onKeyDown={(e) => {
            if (!readOnly && (e.key === "Enter" || e.key === " ")) {
              e.preventDefault();
              onChange(index + 1);
            }
          }}
        />
      ))}
    </div>
  );
};

export default RatingStars;
