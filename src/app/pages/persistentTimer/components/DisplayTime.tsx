"use client";
import { numberToString } from "../page";
import { Typography } from "@mui/material";

export const DisplayTime = (props: { seconds: string }) => {
  const secondsNumber = parseInt(props.seconds);
  const displayMinutes = Math.floor(secondsNumber / 60);
  const displaySeconds = secondsNumber - displayMinutes * 60;
  return (
    <Typography variant="h1">
      {`${numberToString(displayMinutes)}:${numberToString(displaySeconds)}`}
    </Typography>
  );
};
