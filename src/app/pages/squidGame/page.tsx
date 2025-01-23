"use client";

import { useState } from "react";
import { GameMenu, GameRunning } from "./components";
import { DemoPage } from "@/components";
import { Typography } from "@mui/material";
import { URLTextLink } from "@/components/URLTextLink";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("Press Start to Play");

  const startGame = () => {
    setIsRunning(true);
  };

  const gameOver = (score: number, message: string) => {
    setScore(score);
    setMessage(message);
    setIsRunning(false);
  };

  return (
    <>
      {isRunning ? (
        <GameRunning gameOver={gameOver} />
      ) : (
        <GameMenu startGame={startGame} score={score} message={message} />
      )}
    </>
  );
}

export default function Wrapper() {
  const notelist = (
    <>
      <Typography component="li">
        See:{" "}
        <URLTextLink url="https://www.reacterry.com/portal/challenges/timer-2" />
      </Typography>
    </>
  );

  return (
    <DemoPage href="/pages/squidGame" notelist={notelist} heading="Objectives">
      <App />
    </DemoPage>
  );
}
