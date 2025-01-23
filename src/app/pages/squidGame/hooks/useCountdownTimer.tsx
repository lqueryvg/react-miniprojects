"use client";
import { useState, useRef, useEffect } from "react";

export const useCountdownTimer = (countdownFinishedCallback: () => void) => {
  const [secondsRemaining, setSecondsRemaining] = useState(15);
  const timerRef = useRef<null | NodeJS.Timeout>(null);

  useEffect(() => {
    if (secondsRemaining > 0) {
      timerRef.current = setInterval(() => {
        setSecondsRemaining((prev) => {
          const newValue = prev - 1;
          if (newValue === 0) {
            countdownFinishedCallback();
          }
          return newValue;
        });
      }, 1000);
    }

    return () => {
      clearInterval(timerRef.current!);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondsRemaining]);

  return secondsRemaining;
};
