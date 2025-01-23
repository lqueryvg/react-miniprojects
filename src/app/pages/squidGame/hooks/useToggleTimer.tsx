"use client";
import { useState, useRef, useEffect } from "react";

export const useToggleTimer = (initialToggleValue: boolean) => {
  const [toggleValue, setToggleValue] = useState(initialToggleValue);
  const timerRef = useRef<null | NodeJS.Timeout>(null);

  useEffect(() => {
    timerRef.current = setTimeout(
      () => {
        setToggleValue((prev) => !prev);
      },
      Math.floor(Math.random() * 1000) + 1000,
    );

    return () => {
      clearTimeout(timerRef.current!);
    };
  }, [toggleValue]);

  return toggleValue;
};
