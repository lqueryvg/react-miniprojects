"use client";

import { Trash } from "lucide-react";
import { Button } from "@shadui/button";
import { useToast } from "~/lib/shadcn/hooks/use-toast";
import { TextLink } from "~/app/_components/TextLink";
import { DemoPage } from "~/app/_components";
import { TodoForm, TodoFormValues } from "./TodoForm";
import { useTodoList } from "./useTodoList";

const App = () => {
  const { todos, addTodo, removeTodo, toggleTodo } = useTodoList();
  const { toast } = useToast();

  function handleSubmit(values: TodoFormValues) {
    console.log({ values });

    if (!values.simulateSubmissionError) {
      addTodo(values.todoText);
      return;
    }

    toast({
      title: "Error",
      description: "This is a simulated error (because you checked the box).",
      variant: "destructive",
    });
    throw new Error("Simulated error");
  }

  return (
    <div className="flex flex-col items-center">
      <TodoForm onSubmit={handleSubmit} />

      {/* TODO list */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h5>{todo.text}</h5>
            <Button
              color="error"
              variant="destructive"
              onClick={() => removeTodo(todo.id)}
            >
              <Trash />
              Remove
            </Button>
            <Button
              variant="outline"
              color="success"
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.completed ? "Incomplete" : "Complete"}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Wrapper() {
  const notelist = (
    <>
      <li>
        Credit:{" "}
        <TextLink url="https://www.reacterry.com/portal/challenges/local-storage-3" />
      </li>
    </>
  );

  return (
    <DemoPage href="/pages/persistentTodoList" notelist={notelist}>
      <App />
    </DemoPage>
  );
}
