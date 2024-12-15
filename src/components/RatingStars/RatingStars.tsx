"use client";

import useStarHandler from "@/hook/useStarHandler";
import { Star } from "lucide-react";

const RatingStars = () => {
  const { rate, preRate, setPreRate, handleOnClick, handleOnMouseEnter } =
    useStarHandler();
  return (
    <div className="flex gap-2 justify-center items-center">
      <div className="flex">
        {Array.from({ length: 5 }, (_, idx) => {
          // star: primary color
          const color = idx < (rate || preRate) ? "#006d77" : "#E0E0E0";
          return (
            <Star
              className="size-10"
              onMouseEnter={() => handleOnMouseEnter(idx)}
              onMouseLeave={() => setPreRate(0)}
              onClick={() => handleOnClick(idx)}
              key={idx}
              fill={color}
              stroke={color}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RatingStars;
