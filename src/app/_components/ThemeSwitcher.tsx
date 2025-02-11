"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@shadui/button";

const toggleTheme = (theme: string | undefined) => {
  if (theme === "dark") return "light";
  return "dark";
};

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        setTheme(toggleTheme(theme));
      }}
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </Button>
  );
}
