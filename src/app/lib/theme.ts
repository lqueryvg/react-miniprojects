"use client";
import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "light",
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

export default darkTheme;
