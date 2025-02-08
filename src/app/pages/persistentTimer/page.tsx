"use client";

import { useEffect } from "react";
import { useLocalStorage } from "~/app/_hooks/useLocalStorage";
import { DemoPage } from "~/app/_components/DemoPage";
import { DisplayTime } from "./components/DisplayTime";
import Notes from "./notes.mdx";

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
  return (
    <DemoPage href="/pages/persistentTimer" notelist={<Notes />}>
      <App />
    </DemoPage>
  );
}
