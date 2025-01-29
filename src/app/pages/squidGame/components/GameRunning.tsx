"use client";
import { useState } from "react";
import { Box } from "./Box";
import { useToggleTimer } from "../hooks/useToggleTimer";
import { useCountdownTimer } from "../hooks/useCountdownTimer";

export type GameRunningProps = {
  gameOver: (score: number, message: string) => void;
};

export function GameRunning(props: GameRunningProps) {
  const [score, setScore] = useState(0);
  const isGreen = useToggleTimer(true);
  const secondsRemaining = useCountdownTimer(() => {
    props.gameOver(score, "Time's Up!");
  });

  const boxClicked = () => {
    if (isGreen) {
      setScore((prev) => {
        const newScore = prev + 1;
        if (newScore >= 15) {
          props.gameOver(score, "You won!");
        }
        return newScore;
      });
      return;
    }
    props.gameOver(score, "You clicked the red box! Game Over");
  };

  return (
    <div className="flex flex-col items-center">
      {/* <Timer secondsRemaining={secondsRemaining} /> */}
      <h4>Time left: {secondsRemaining}</h4>

      <h1>Score: {score}</h1>
      {/* <Scorecard score={score} /> */}
      <Box onClick={boxClicked} isgreen={isGreen} />
    </div>
  );
}
