"use client";

import { useTodoList } from "./useTodoList";
import { Button } from "@mui/material";
import { URLTextLink } from "@/components/URLTextLink";
import DeleteIcon from "@mui/icons-material/Delete";
import { DemoPageShad } from "@/components";
import { TodoForm, TodoFormValues } from "./TodoForm";
import { useToast } from "~/hooks/use-toast";

const App = () => {
  const { todos, addTodo, removeTodo, toggleTodo } = useTodoList();
  const { toast } = useToast();

  function handleSubmit(values: TodoFormValues) {
    console.log({ values });

    if (!values.simulateSubmissionError) {
      addTodo(values.todoText);
    }

    toast({
      title: "Error",
      description: "This is a simulated error (because you checked the box).",
      variant: "destructive",
    });
  }

  return (
    <div className="flex flex-col items-center">
      <TodoForm onSubmit={handleSubmit} />

      {/* TODO list */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {/* <div className> */}
            {/* <Stack direction="row" spacing={1} useFlexGap> */}
            <h5>{todo.text}</h5>
            <Button
              color="error"
              startIcon={<DeleteIcon />}
              variant="contained"
              onClick={() => removeTodo(todo.id)}
            >
              Remove
            </Button>
            <Button
              variant="outlined"
              color="success"
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.completed ? "Incomplete" : "Complete"}
            </Button>
            {/* </Stack> */}
            {/* </div> */}
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
        <URLTextLink url="https://www.reacterry.com/portal/challenges/local-storage-3" />
      </li>
    </>
  );

  return (
    <DemoPageShad href="/pages/persistentTodoList" notelist={notelist}>
      <App />
    </DemoPageShad>
  );
}
