"use client";

import { useState, useRef, useEffect } from "react";
import { Input } from "@shadui/input";
import { getNewValueAndCursorPosition } from "./helpers";

function useForceUpdate() {
  const [, setToggle] = useState(false);
  return () => setToggle((prev) => !prev);
}

export const App = () => {
  const forceUpdate = useForceUpdate();
  const [textValue, setTextValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [cursorPosition, setCursorPosition] = useState(0);

  useEffect(() => {
    // restore the position of the cursor
    if (inputRef.current) {
      inputRef.current.setSelectionRange(cursorPosition, cursorPosition);
    }
  }, [textValue, cursorPosition, forceUpdate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const eventTextField = e.target.value;
    const eventCursorPosition = e.target.selectionStart!;

    const { formattedPhoneNumber, newCursorPosition } =
      getNewValueAndCursorPosition(eventTextField, eventCursorPosition);

    // console.log("state:", debugField(textValue, cursorPosition));
    // console.log("event:", debugField(eventTextField, eventCursorPosition));
    // console.log(
    //   "formatted:",
    //   debugField(formattedPhoneNumber, newCursorPosition),
    // );

    if (
      textValue === formattedPhoneNumber &&
      eventTextField.length > formattedPhoneNumber.length
    ) {
      setCursorPosition(eventCursorPosition - 1);
      forceUpdate();
      // The user entered only non-digit characters which when stripped out
      // means the neither the formatted value nor the new computed cursor
      // position changed. But we still need to force an
      // update to put the cursor position back in the previous position
      // otherwise it will jump to the end of the input field.
      // Setting the state of those values to the same values as before
      // will not trigger the useEffect() so we use the useForceUpdate()
      // toggle to force the cursor to be put back.
      return;
    }

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
