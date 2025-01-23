"use client";

import React from "react";
import {
  ThemeProvider,
  createTheme,
  type PaletteMode,
} from "@mui/material/styles";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CssBaseline } from "@mui/material";
import { Menu } from "@/components/Menu";

export default function ThemeProviderWrapper(props: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useLocalStorage<PaletteMode>("colorTheme", "light");

  const theme = createTheme({
    cssVariables: true,
    palette: {
      mode,
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#9c27b0",
      },
    },
    typography: {
      fontSize: 18,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Menu currentMode={mode} onChangeMode={setMode}>
        {props.children}
      </Menu>
    </ThemeProvider>
  );
}
