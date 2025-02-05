"use client";

import { useState } from "react";
import { GameMenu } from "./components/GameMenu";
import { GameRunning } from "./components/GameRunning";
import { TextLink } from "~/app/_components/TextLink";
import { DemoPageWrapper } from "~/app/_components/DemoPageWrapper";

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
      <li>box randomly toggles between green and red</li>
      <li>goal is to click 15 times on the green box within 15 seconds</li>
      <li>if the player clicks red, they lose</li>
      <li>each colour is displayed between 1 and 2 seconds</li>
      <li>
        Credit:{" "}
        <TextLink
          url="https://www.reacterry.com/portal/challenges/green-light--red-light"
          text="reacterry.com"
        />
      </li>
    </>
  );

  return (
    <DemoPageWrapper href="/pages/squidGame" notelist={notelist}>
      <App />
    </DemoPageWrapper>
  );
}
