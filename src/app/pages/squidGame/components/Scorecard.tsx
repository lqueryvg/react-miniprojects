"use client";
import { Typography } from "@mui/material";

export const Scorecard = (props: { score: number }) => (
  <Typography variant="h4">Score: {props.score}</Typography>
);
