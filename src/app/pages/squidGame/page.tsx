"use client";

import { useState } from "react";
import { GameMenu } from "./components/GameMenu";
import { GameRunning } from "./components/GameRunning";
import { TextLink } from "~/app/_components/TextLink";
import { DemoPage } from "~/app/_components/DemoPage";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("Press Start to Play");

  const handleStartGame = () => {
    setIsRunning(true);
  };

  const handleGameOver = (score: number, message: string) => {
    console.log("gameOver():)", { score, message, isRunning });
    setMessage(message);
    setScore(score);
    setIsRunning(false);
  };

  return (
    <>
      {isRunning ? (
        <GameRunning onGameOver={handleGameOver} targetScore={15} />
      ) : (
        <GameMenu
          onStartGame={handleStartGame}
          score={score}
          message={message}
        />
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
    <DemoPage href="/pages/squidGame" notelist={notelist}>
      <App />
    </DemoPage>
  );
}
