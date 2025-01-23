"use client";

import { useEffect, useState } from "react";
import { DemoPage } from "@/components";
import { Stack, TextField, Typography } from "@mui/material";
import { URLTextLink } from "@/components/URLTextLink";
import { Code } from "@/components/Code";
import { useTheme } from "@mui/material/styles";

const useDebounce = (valueToBeDebounced: string, delayMilliseconds: number) => {
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(valueToBeDebounced);
    }, delayMilliseconds);
    return () => {
      clearTimeout(timer);
    };
  }, [valueToBeDebounced, delayMilliseconds]);
  return debouncedValue;
};

const App = () => {
  const [textValue, setTextValue] = useState("");
  const theme = useTheme();
  const debouncedValue = useDebounce(textValue, 1000);

  return (
    <Stack alignItems={"center"} spacing={2}>
      <TextField
        label="type a string"
        type="text"
        variant="outlined"
        fullWidth
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTextValue(e.target.value)
        }
      />
      <TextField
        label="debounced string"
        fullWidth
        variant="outlined"
        value={debouncedValue}
        slotProps={{
          input: {
            // Use slotProps.input
            readOnly: true,
            style: { cursor: "default" }, // disable input cursor
          },
        }}
        sx={{
          "& .MuiInputBase-root": {
            backgroundColor: theme.palette.action.disabledBackground, // Consistent background
          },
          "& .MuiInputBase-input": {
            cursor: "default", // mouse cursor
          },
        }}
      />
    </Stack>
  );
};

export default function Wrapper() {
  const notelist = (
    <>
      <Typography component="li">
        create a custom hook <Code inline>useDebounce()</Code> that allows you
        to debounce values which change frequently
      </Typography>
      <Typography component="li">
        called as follows: <br />
        <Code>
          debouncedValue = useDebounce(valueToBeDebounced, delayMilliseconds)
        </Code>
      </Typography>
      <Typography component="li">
        credit:{" "}
        <URLTextLink url="https://www.youtube.com/watch?v=CAsTwrYx8pM&t=742s" />
      </Typography>
    </>
  );
  return (
    <DemoPage href="/pages/debounce" notelist={notelist}>
      <App />
    </DemoPage>
  );
}
