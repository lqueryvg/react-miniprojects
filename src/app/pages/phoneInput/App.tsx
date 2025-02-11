"use client";

import { useState, useRef, useEffect } from "react";
import { Input } from "@shadui/input";
import { getNewValueAndCursorPosition } from "./helpers";

export const App = () => {
  const [textValue, setTextValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [cursorPosition, setCursorPosition] = useState(0);

  useEffect(() => {
    // restore the position of the cursor
    if (inputRef.current) {
      inputRef.current.setSelectionRange(cursorPosition, cursorPosition);
    }
  }, [textValue, cursorPosition]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const unformattedPhoneNumber = e.target.value;
    const oldCursorPosition = e.target.selectionStart!;

    const { formattedPhoneNumber, newCursorPosition } =
      getNewValueAndCursorPosition(unformattedPhoneNumber, oldCursorPosition);

    setTextValue(formattedPhoneNumber);
    setCursorPosition(newCursorPosition);
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
