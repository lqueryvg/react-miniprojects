"use client";

import { useEffect } from "react";
import { URLTextLink } from "@/components";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { DisplayTime } from "./components/DisplayTime";
import { DemoPage } from "@/components";

export const numberToString = (num: number) => {
  return num.toString().padStart(2, "0");
};

const INITIAL_TIME = 10 * 60;

const App = () => {
  const [seconds, setSeconds] = useLocalStorage<number>(
    "secondsRemaining",
    INITIAL_TIME,
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        let newSeconds = prev - 1;
        if (newSeconds <= 0) {
          newSeconds = INITIAL_TIME;
        }
        return newSeconds;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [setSeconds]);

  return (
    <>
      <DisplayTime seconds={seconds.toString()}></DisplayTime>
    </>
  );
};

export default function Wrapper() {
  const notelist = (
    <>
      <li>
        See:{" "}
        <URLTextLink url="https://www.reacterry.com/portal/challenges/timer-2" />
      </li>
    </>
  );

  return (
    <DemoPage href="/pages/persistentTimer" notelist={notelist}>
      <App />
    </DemoPage>
  );
}
