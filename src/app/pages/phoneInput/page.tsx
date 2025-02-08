"use client";

import { useState, useRef, useEffect } from "react";
import { DemoPage } from "~/app/_components/DemoPage";
import { Input } from "@shadui/input";
import Notes from "./notes.mdx";

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
    <div className="flex flex-col">
      <Input
        type="text"
        placeholder="Type digits..."
        value={textValue}
        onChange={handleChange}
        ref={inputRef}
        className="mb-4"
        maxLength={"(123) 456-7890123".length}
      />
    </div>
  );
};

export default function Wrapper() {
  return (
    <DemoPage href="/pages/phoneInput" notelist={<Notes />}>
      <PhoneNumberInput />
    </DemoPage>
  );
}
