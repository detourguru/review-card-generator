"use client";

import { HTMLAttributes, useState } from "react";
import RatingStars from "../RatingStars/RatingStars";
import { ImageIcon } from "lucide-react";

const Preview = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  const [value, setValue] = useState("");
  const basicClass = "text-center bg-basic focus:bg-white";

  const handleOnInput = (input: string) => {
    const numericValue = input.replace(",", "");
    if (!isNaN(Number(numericValue))) {
      setValue(Number(numericValue).toLocaleString());
    }
  };

  return (
    <div className={className}>
      <div className={`${basicClass} flex justify-center`}>
        <ImageIcon stroke="#E0E0E0" className={`${basicClass} size-44 p-8`} />
        <input type="file" style={{ display: "none" }} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <input
            type="text"
            placeholder="판매처"
            className={`text-sm font-semibold ${basicClass}`}
          />
          <input
            type="text"
            placeholder="상품명"
            className={`text-2xl font-bold ${basicClass}`}
          />
        </div>
      </div>
      <input
        type="text"
        value={value}
        onInput={(e) => handleOnInput(e.currentTarget.value)}
        placeholder="가격"
        className={`text-2xl font-bold ${basicClass}`}
      />
      <RatingStars />
      <textarea
        placeholder="제품 설명"
        maxLength={80}
        className={`${basicClass}`}
      />
      <div className="">
        <input
          type="text"
          onInput={(e) => handleOnInput(e.currentTarget.value)}
          placeholder="가격"
          className={`text-xs font-bold bg-secondary rounded-xl px-3 py-1`}
        />
      </div>
    </div>
  );
};

export default Preview;
