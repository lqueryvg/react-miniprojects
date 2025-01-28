"use client";

import { useEffect, useState } from "react";
import { DemoPageShad } from "@/components";
import { URLTextLink } from "@/components/URLTextLink";
import { Code } from "@/components/Code";
import { Input } from "~/components/ui/input";

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
        creates a custom hook <Code inline>useDebounce()</Code> to debounce
        values which change frequently
      </li>
      <li>
        called as follows: <br />
        <Code>
          debouncedValue = useDebounce(valueToBeDebounced, delayMilliseconds)
        </Code>
      </li>
      <li>
        credit:{" "}
        <URLTextLink url="https://www.youtube.com/watch?v=CAsTwrYx8pM&t=742s" />
      </li>
    </>
  );
  return (
    <DemoPageShad
      href="/pages/debounce"
      notelist={notelist}
      heading="Functional Requirements"
    >
      <App />
    </DemoPageShad>
  );
}
