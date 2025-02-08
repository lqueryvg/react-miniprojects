"use client";

import { useState } from "react";
import { Input } from "@shadui/input";
import { DemoPage } from "~/app/_components/DemoPage";
import Notes from "./notes.mdx";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const fruits = [
    "Apple",
    "Apricot",
    "Banana",
    "Blueberry",
    "Cherry",
    "Cranberry",
    "Date",
    "Dragonfruit",
    "Elderberry",
    "Fig",
    "Grape",
    "Grapefruit",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setInputValue(input);
    console.log(input);
  };

  return (
    <div className="flex flex-col">
      <Input
        type="text"
        placeholder="Enter filter text..."
        value={inputValue}
        onChange={handleInputChange}
        className="mb-4"
      />

      <div>
        {fruits
          .filter((fruit) =>
            fruit.toLowerCase().includes(inputValue.toLowerCase()),
          )
          .map((fruit) => (
            <h1 className="text-center" key={fruit}>
              {fruit}
            </h1>
          ))}
      </div>
    </div>
  );
};

export default function Wrapper() {
  return (
    <DemoPage href="/pages/fruits" notelist={<Notes />}>
      <App />
    </DemoPage>
  );
}
