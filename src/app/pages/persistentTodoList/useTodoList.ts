"use client";
import { useLocalStorage } from "~/app/_hooks/useLocalStorage";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export const useTodoList = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: crypto.randomUUID(), text, completed: false }]);
  };

  const toggleTodo = (id: string) => {
    const target = todos.find((o) => o.id === id)!;
    target.completed = !target.completed;
    setTodos([...todos]);
  };
  const removeTodo = (id: string) => {
    const newTodos = todos.filter((o) => o.id !== id);
    setTodos([...newTodos]);
  };

  return {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
  };
};
