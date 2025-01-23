"use client";
import { Scorecard, Outcome } from ".";
import { Button, Stack } from "@mui/material";

export type GameMenuProps = {
  score: number;
  message: string;
  startGame: () => void;
};

export function GameMenu(props: GameMenuProps) {
  return (
    <Stack alignItems={"center"} gap={4}>
      <Button onClick={props.startGame} variant="contained">
        Start
      </Button>

      <Scorecard score={props.score} />
      <Outcome>{props.message}</Outcome>
    </Stack>
  );
}
