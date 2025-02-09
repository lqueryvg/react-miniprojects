"use client";

import { useState } from "react";
import { Input } from "@shadui/input";

export const App = () => {
  const [inputValue, setInputValue] = useState("");

  const fruits = [
    "Hammer",
    "Screwdriver",
    "Drill",
    "Pliers",
    "Spanner",
    "Saw",
    "Knife",
    "Nails",
    "Screws",
    "Bolts",
    "Washers",
    "Glue",
    "Sandpaper",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setInputValue(input);
    console.log(input);
  };

  const filteredFruits = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(inputValue.toLowerCase()),
  );

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
        {filteredFruits.length === 0
          ? "no fruits found"
          : filteredFruits.map((fruit) => (
              <h4 className="text-center" key={fruit}>
                {fruit}
              </h4>
            ))}
      </div>
    </div>
  );
};
