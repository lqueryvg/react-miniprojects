"use client";

import { useState } from "react";
import { GameMenu } from "./components/GameMenu";
import { GameRunning } from "./components/GameRunning";
import { DemoPage } from "~/app/_components/DemoPage";
import Notes from "./notes.mdx";

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
  return (
    <DemoPage href="/pages/squidGame" notelist={<Notes />}>
      <App />
    </DemoPage>
  );
}
