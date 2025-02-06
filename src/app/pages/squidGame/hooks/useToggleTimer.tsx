"use client";
import { useState, useRef, useEffect } from "react";

// toggle between true and false after ranged random interval
const intervalMSeconds = 1000;
const minIntervalMSeconds = 1000;

export const useToggleTimer = (initialToggleValue: boolean) => {
  const [toggleValue, setToggleValue] = useState(initialToggleValue);
  const timerRef = useRef<null | NodeJS.Timeout>(null);

  useEffect(() => {
    timerRef.current = setTimeout(
      () => {
        setToggleValue((prev) => !prev);
      },
      Math.floor(Math.random() * intervalMSeconds) + minIntervalMSeconds,
    );

    return () => {
      clearTimeout(timerRef.current!);
    };
  }, [toggleValue]);

  return toggleValue;
};
