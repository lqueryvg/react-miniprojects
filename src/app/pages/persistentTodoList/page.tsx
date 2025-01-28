"use client";

import { useTodoList } from "./useTodoList";
import { Typography, Button, TextField, Stack, Paper } from "@mui/material";
import { URLTextLink } from "@/components/URLTextLink";
import DeleteIcon from "@mui/icons-material/Delete";
import { DemoPageShad } from "@/components";

const App = () => {
  const { todos, addTodo, removeTodo, toggleTodo } = useTodoList();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const todoText = formData.get("todoText") as string; // Type assertion needed here
    addTodo(todoText);
    e.currentTarget.reset();
  };

  return (
    <Stack direction="column" spacing={2} component={Paper} p={2}>
      <Stack
        direction="row"
        spacing={1}
        useFlexGap
        component="form"
        onSubmit={handleSubmit}
      >
        <TextField
          label="Todo Text"
          name="todoText"
          type="text"
          variant="outlined"
        />
        <Button variant="contained" type="submit">
          Add Todo
        </Button>
      </Stack>

      <Typography component="ul" variant="h1">
        {todos.map((todo) => (
          <Typography component="li" variant="h5" key={todo.id}>
            <Stack direction="row" spacing={1} useFlexGap>
              <Typography variant="h5">{todo.text}</Typography>
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
            </Stack>
          </Typography>
        ))}
      </Typography>
    </Stack>
  );
};

export default function Wrapper() {
  const notelist = (
    <>
      <Typography component="li">
        Credit:{" "}
        <URLTextLink url="https://www.reacterry.com/portal/challenges/local-storage-3" />
      </Typography>
    </>
  );

  return (
    <DemoPageShad href="/pages/persistentTodoList" notelist={notelist}>
      <App />
    </DemoPageShad>
  );
}
