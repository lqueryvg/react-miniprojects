"use client";
import MUIBox from "@mui/material/Box";

type BoxProps = {
  isgreen: boolean;
  onClick: () => void;
};

export const Box = (props: BoxProps) => {
  const colour = props.isgreen ? "green" : "red";
  return (
    <MUIBox
      sx={{
        width: 200,
        height: 200,
        borderRadius: 1,
        bgcolor: colour,
      }}
      onClick={props.onClick}
    />
  );
};
