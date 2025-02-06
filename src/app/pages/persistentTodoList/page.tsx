"use client";

import { Toaster } from "@shadui/toaster";
import { useToast } from "~/lib/shadcn/hooks/use-toast";
import { TextLink } from "~/app/_components/TextLink";
import { DemoPage } from "~/app/_components/DemoPage";
import { TodoForm, type TodoFormValues } from "./TodoForm";
import { useTodoList } from "./useTodoList";
import { TodoList } from "./TodoList";

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
      <Toaster />
      <TodoForm onSubmit={handleSubmit} />
      <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
};

export default function Wrapper() {
  const notelist = (
    <>
      <li>
        todo list is stored in browser local storage: it is shared between tabs
        and will persist after the tab is closed and re-opened
      </li>
      <li>
        Credit to:{" "}
        <TextLink
          url="https://www.reacterry.com/portal/challenges/local-storage-3"
          text="reacterry.com"
        />
      </li>
    </>
  );

  return (
    <DemoPage href="/pages/persistentTodoList" notelist={notelist}>
      <App />
    </DemoPage>
  );
}
