"use client";

import { Toaster } from "@shadui/toaster";
import { useToast } from "~/lib/shadcn/hooks/use-toast";
import { DemoPage } from "~/app/_components/DemoPage";
import { TodoForm, type TodoFormValues } from "./TodoForm";
import { useTodoList } from "./useTodoList";
import { TodoList } from "./TodoList";
import Notes from "./notes.mdx";

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
  return (
    <DemoPage href="/pages/persistentTodoList" notelist={<Notes />}>
      <App />
    </DemoPage>
  );
}
