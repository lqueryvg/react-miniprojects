"use client";
import { numberToString } from "../App";

export const DisplayTime = (props: { seconds: string }) => {
  const secondsNumber = parseInt(props.seconds);
  const displayMinutes = Math.floor(secondsNumber / 60);
  const displaySeconds = secondsNumber - displayMinutes * 60;
  return (
    <h1 className="text-6xl">
      {`${numberToString(displayMinutes)}:${numberToString(displaySeconds)}`}
    </h1>
  );
};
