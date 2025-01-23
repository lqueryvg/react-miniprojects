import React from "react";
import { IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import type { PaletteMode } from "@mui/material/styles";

const ThemeSwitcher = (props: {
  onChangeMode: (mode: PaletteMode) => void;
  currentMode: PaletteMode;
}) => {
  const handleModeChange = () => {
    props.onChangeMode(props.currentMode === "light" ? "dark" : "light");
  };

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="dark light mode"
        onClick={handleModeChange}
      >
        {props.currentMode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </>
  );
};

export default ThemeSwitcher;
