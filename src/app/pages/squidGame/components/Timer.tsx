"use client";
import { Typography } from "@mui/material";

export const Timer = (props: { secondsRemaining: number }) => (
  <Typography variant="h4">Time left: {props.secondsRemaining}</Typography>
);
