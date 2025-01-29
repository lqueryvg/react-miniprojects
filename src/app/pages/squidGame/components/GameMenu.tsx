import { Button } from "~/lib/shadcn/components/ui/button";

export function GameMenu(props: {
  score: number;
  message: string;
  startGame: () => void;
}) {
  return (
    <div className="flex flex-col items-center">
      <Button onClick={props.startGame}>Start</Button>

      <h1>Score: {props.score}</h1>
      <h1>{props.message}</h1>
    </div>
  );
}
