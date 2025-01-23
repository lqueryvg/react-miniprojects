"use client";

import { useState } from "react";
import { DemoPage } from "@/components";
import { TextField, Typography } from "@mui/material";
import { URLTextLink } from "@/components/URLTextLink";

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
      <TextField
        label="Type something"
        type="text"
        variant="outlined"
        onChange={handleInputChange}
      />
      <div>
        {fruits
          .filter((fruit) =>
            fruit.toLowerCase().includes(inputValue.toLowerCase()),
          )
          .map((fruit) => (
            <Typography key={fruit} variant="h5">
              {fruit}
            </Typography>
          ))}
      </div>
    </div>
  );
};

export default function Wrapper() {
  const notelist = (
    <>
      <Typography component="li">display a list of fruits</Typography>
      <Typography component="li">
        as the user types, display only those items that match the search term
      </Typography>
      <Typography component="li">
        the list should update as soon as the user types
      </Typography>
      <Typography component="li">
        display a friendly message if no items match the search
      </Typography>
      <Typography component="li">
        Credit:{" "}
        <URLTextLink url="https://www.youtube.com/watch?v=CAsTwrYx8pM&t=225s" />
      </Typography>
    </>
  );

  return (
    <DemoPage
      href="/pages/fruits"
      notelist={notelist}
      heading="Functional Requirements"
    >
      <App />
    </DemoPage>
  );
}
