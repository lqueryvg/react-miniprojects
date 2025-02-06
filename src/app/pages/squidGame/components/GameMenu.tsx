import { Button } from "@shadui/button";

export function GameMenu(props: {
  score: number;
  message: string;
  onStartGame: () => void;
}) {
  return (
    <div className="flex flex-col items-center">
      <Button onClick={props.onStartGame}>Start</Button>

      <h1>Score: {props.score}</h1>
      <h1>{props.message}</h1>
    </div>
  );
}
