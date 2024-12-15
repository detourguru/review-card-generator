"use client";

import { useState } from "react";

export default function useStarHandler() {
  const [rate, setRate] = useState(0);
  const [preRate, setPreRate] = useState(0);

  const handleOnClick = (idx: number) => {
    if (rate != 0) {
      return setRate(0);
    }
    return setRate(idx + 1);
  };

  const handleOnMouseEnter = (idx: number) => {
    return setPreRate(idx + 1);
  };

  return { rate, preRate, setPreRate, handleOnClick, handleOnMouseEnter };
}
