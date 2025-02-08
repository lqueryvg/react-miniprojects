"use client";

import { useEffect, useState } from "react";
import { Input } from "@shadui/input";
import { DemoPage } from "~/app/_components/DemoPage";
import Notes from "./notes.mdx";

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
          placeholder="type then wait"
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
  return (
    <DemoPage href="/pages/debounce" notelist={<Notes />}>
      <App />
    </DemoPage>
  );
}
