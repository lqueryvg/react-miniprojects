"use client";
import { useState } from "react";
import { Timer, Scorecard, Box } from ".";
import { useToggleTimer, useCountdownTimer } from "../hooks";
import { Stack } from "@mui/material";

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
    <Stack alignItems={"center"} gap={4}>
      <Timer secondsRemaining={secondsRemaining} />
      <Scorecard score={score} />
      <Box onClick={boxClicked} isgreen={isGreen} />
    </Stack>
  );
}
