"use client";

import { cn } from "~/lib/utils";

type BoxProps = {
  isgreen: boolean;
  onClick: () => void;
};

export const Box = (props: BoxProps) => {
  const colour = props.isgreen ? "bg-green-500" : "bg-red-500";
  return (
    <div
      className={cn("h-[200px] w-[200px] rounded", colour)}
      onClick={props.onClick}
    >
      {" "}
    </div>
  );
};
