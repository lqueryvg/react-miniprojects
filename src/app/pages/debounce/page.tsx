"use client";

import { useEffect, useState } from "react";
import { Input } from "@shadui/input";
import { DemoPage } from "~/app/_components/DemoPage";
import { TextLink } from "~/app/_components/TextLink";

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
  const debouncedValue = useDebounce(textValue, 1000);

  return (
    <>
      <div>
        <Input
          type="text"
          placeholder="real keyboard only, type some characters, then wait"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          className="mb-4"
        />
        <p className="mb-4 w-full text-muted-foreground">
          Debounced value: {debouncedValue}
        </p>
      </div>
    </>
  );
};

export default function Wrapper() {
  const notelist = (
    <>
      <li>debounce frequently changing values</li>
      <li>
        <em>
          Note: this demo makes little sense on mobile, since characters are not
          rapidly entered into the text input field
        </em>
      </li>
      <li>
        creates a custom hook <code>useDebounce()</code> to debounce values
        which change frequently
      </li>
      <li>
        called as follows: <br />
        <pre>
          debouncedValue = useDebounce(valueToBeDebounced, delayMilliseconds)
        </pre>
      </li>
      <li>
        credit:{" "}
        <TextLink url="https://www.youtube.com/watch?v=CAsTwrYx8pM&t=742s" />
      </li>
    </>
  );
  return (
    <DemoPage href="/pages/debounce" notelist={notelist}>
      <App />
    </DemoPage>
  );
}
