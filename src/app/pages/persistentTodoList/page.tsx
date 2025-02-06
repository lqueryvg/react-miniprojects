"use client";

import { Trash } from "lucide-react";
import { Button } from "@shadui/button";
import { Checkbox } from "@shadui/checkbox";
import { Toaster } from "@shadui/toaster";
import { Table, TableBody, TableCell, TableRow } from "@shadui/table";
import { useToast } from "~/lib/shadcn/hooks/use-toast";
import { TextLink } from "~/app/_components/TextLink";
import { DemoPage } from "~/app/_components/DemoPage";
import { TodoForm, type TodoFormValues } from "./TodoForm";
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
      <Toaster />

      <TodoForm onSubmit={handleSubmit} />

      {/* TODO list */}
      <Table>
        <TableBody>
          {todos.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell className="font-medium">
                <Checkbox
                  checked={todo.completed}
                  onCheckedChange={() => toggleTodo(todo.id)}
                ></Checkbox>
              </TableCell>
              <TableCell>{todo.text}</TableCell>
              <TableCell className="text-right">
                <Button
                  color="error"
                  variant="destructive"
                  onClick={() => removeTodo(todo.id)}
                >
                  <Trash />
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default function Wrapper() {
  const notelist = (
    <>
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
