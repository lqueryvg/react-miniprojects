"use client";

import { useEffect } from "react";
import { TextLink } from "~/app/_components";
import { useLocalStorage } from "~/app/_hooks/useLocalStorage";
import { DisplayTime } from "./components/DisplayTime";
import { DemoPage } from "~/app/_components";

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
        <TextLink url="https://www.reacterry.com/portal/challenges/timer-2" />
      </li>
    </>
  );

  return (
    <DemoPage href="/pages/persistentTimer" notelist={notelist}>
      <App />
    </DemoPage>
  );
}
