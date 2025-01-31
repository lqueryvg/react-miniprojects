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
      <div className="min-w-[60ch] max-w-[300px] flex-1">
        <Input
          type="text"
          placeholder="type a string..."
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          className="mb-4"
        />
        <p className="mb-4 w-full min-w-3.5 text-muted-foreground">
          Debounced value: {debouncedValue}
        </p>
      </div>
    </>
  );
};

export default function Wrapper() {
  const notelist = (
    <>
      {/* <li className="prose max-w-[screen-sm]"> */}
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
    <DemoPage
      href="/pages/debounce"
      notelist={notelist}
      heading="Functional Requirements"
    >
      <App />
    </DemoPage>
  );
}
