"use client";

import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark", // or 'dark'
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ p: 3 }}>
        <Typography variant="h1" gutterBottom>
          Customized Typography Example
        </Typography>
        <Typography variant="body1">
          This is a paragraph with custom styles applied through the theme. It
          demonstrates how to change the default look of the &lt;p&gt; tag. You
          can use <strong>strong</strong> or <em>emphasized</em> text within the
          paragraph, and they will also be styled. This is very long text to
          demonstrate word wrapping.
        </Typography>
        <Typography variant="body1">
          Another paragraph with the same custom styles.
        </Typography>
        <Typography variant="h2">A Heading</Typography>
        <Typography variant="body1">More text.</Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
