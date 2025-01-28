"use client";

import { useState } from "react";
import { DemoPageShad } from "@/components";

import { URLTextLink } from "@/components/URLTextLink";
import { Input } from "~/components/ui/input";

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
    <div>
      <Input
        type="text"
        placeholder="Type something..."
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
            <h1 key={fruit}>{fruit}</h1>
          ))}
      </div>
    </div>
  );
};

export default function Wrapper() {
  const notelist = (
    <>
      <li>display a list of fruits</li>
      <li>
        as the user types, display only those items that match the search term
      </li>
      <li>the list should update as soon as the user types</li>
      <li>display a friendly message if no items match the search</li>
      <li>
        Credit:{" "}
        <URLTextLink url="https://www.youtube.com/watch?v=CAsTwrYx8pM&t=225s" />
      </li>
    </>
  );

  return (
    <DemoPageShad
      href="/pages/fruits"
      notelist={notelist}
      heading="Functional Requirements"
    >
      <App />
    </DemoPageShad>
  );
}
