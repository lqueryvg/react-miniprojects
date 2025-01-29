"use client";

import { useState } from "react";
import { GameMenu } from "./components/GameMenu";
import { GameRunning } from "./components/GameRunning";
import { TextLink } from "~/app/_components/TextLink";
import { DemoPage } from "~/app/_components";

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
      <li>
        See:{" "}
        <TextLink url="https://www.reacterry.com/portal/challenges/timer-2" />
      </li>
    </>
  );

  return (
    <DemoPage href="/pages/squidGame" notelist={notelist} heading="Objectives">
      <App />
    </DemoPage>
  );
}
