"use client";

import { useState, useRef, useEffect } from "react";
import { DemoPage } from "~/app/components";
import { Stack, TextField, Typography } from "@mui/material";
import { URLTextLink } from "@/components/URLTextLink";
import { Code } from "@/components/Code";

const formatPhoneNumber = (value: string) => {
  let formattedText = value.replace(/[^\d]/g, ""); // remove all non-digits
  if (formattedText.length > "123".length) {
    formattedText = formattedText.replace(/(\d{3})/, "($1) "); // format "123" as "(123)""
    if (formattedText.length > "(123) 456".length) {
      formattedText = formattedText.replace(/\((\d{3})\) (\d{3})/, "($1) $2-"); // format "(123) 4567" as "(123) 456-7"
    }
  }
  return formattedText;
};

interface Selection {
  start: number;
  end: number;
}

const PhoneNumberInput = () => {
  const [textValue, setTextValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [selection, setSelection] = useState<Selection>({ start: 0, end: 0 });

  useEffect(() => {
    // restore the position of the cursor
    if (inputRef.current) {
      inputRef.current.setSelectionRange(selection.start, selection.end);
    }
  }, [textValue, selection]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    const charsAdded = formattedPhoneNumber.length - textValue.length;
    setTextValue(formattedPhoneNumber);
    const selectionOffset = Math.abs(charsAdded) === 1 ? 0 : charsAdded;
    setSelection({
      start: e.target.selectionStart! + selectionOffset,
      end: e.target.selectionEnd! + selectionOffset,
    });
  };

  return (
    <TextField
      label="Enter phone number"
      value={textValue}
      onChange={handleChange}
      inputRef={inputRef}
      fullWidth
      slotProps={{
        htmlInput: {
          inputMode: "numeric",
          maxLength: "(123) 456-7890123".length,
        },
      }}
    />
  );
};

const App = () => {
  return (
    <div>
      <Stack direction="row" alignItems="center" spacing={1} useFlexGap>
        <PhoneNumberInput />
      </Stack>
    </div>
  );
};

export default function Wrapper() {
  const notelist = (
    <>
      <Typography component="li">
        create <Code inline>PhoneNumberInput</Code> component
      </Typography>
      <Typography component="li">
        user types digits into input text field
      </Typography>
      <Typography component="li">
        enforce input of numerical digits only
      </Typography>
      <Typography component="li">13 digits max</Typography>
      <Typography component="li">
        automatic formatting:
        <Typography component="ul">
          <Typography component="li">
            add parens around first 3 digits
          </Typography>
          <Typography component="li">insert a dash after 6th digit</Typography>
        </Typography>
      </Typography>
      <Typography component="li">
        editing the number should work as expected
      </Typography>
      <Typography component="li">
        Credit:{" "}
        <URLTextLink url="https://www.youtube.com/watch?v=CAsTwrYx8pM&t=742s" />
      </Typography>
    </>
  );

  return (
    <DemoPage
      href="/pages/phoneInput"
      notelist={notelist}
      heading="Functional Requirements"
    >
      <App />
    </DemoPage>
  );
}
