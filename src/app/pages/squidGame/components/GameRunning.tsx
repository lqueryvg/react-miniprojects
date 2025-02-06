"use client";
import { useEffect, useState } from "react";
import { Box } from "./Box";
import { useToggleTimer } from "../hooks/useToggleTimer";
import { useCountdownTimer } from "../hooks/useCountdownTimer";

export type GameRunningProps = {
  targetScore: number;
  onGameOver: (score: number, message: string) => void;
};

export function GameRunning(props: GameRunningProps) {
  const [score, setScore] = useState(0);
  const isGreen = useToggleTimer(true);
  const secondsRemaining = useCountdownTimer(() => {
    props.onGameOver(score, "Time's Up!");
  });

  useEffect(() => {
    if (score >= props.targetScore) {
      // WARNING:
      // need to call this within useEffect to avoid the dreaded::
      // "Cannot update a component while rendering a different component"
      props.onGameOver(score, "You won!");
    }
  }, [score]);

  const handleBoxClicked = () => {
    if (isGreen) {
      setScore(score + 1);
      return;
    }
    props.onGameOver(score, "You clicked the red box! Game Over");
  };

  return (
    <div className="flex flex-col items-center">
      <h4>Time left: {secondsRemaining}</h4>

      <h1>Score: {score}</h1>
      <Box onClick={handleBoxClicked} isgreen={isGreen} />
    </div>
  );
}
