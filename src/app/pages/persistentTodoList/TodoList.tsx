import { Trash } from "lucide-react";
import { Button } from "@shadui/button";
import { Checkbox } from "@shadui/checkbox";
import { Table, TableBody, TableCell, TableRow } from "@shadui/table";
import type { Todo } from "./useTodoList";

export const TodoList = (props: {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}) => {
  return (
    <Table>
      <TableBody>
        {props.todos.map((todo) => (
          <TableRow key={todo.id}>
            <TableCell className="font-medium">
              <Checkbox
                checked={todo.completed}
                onCheckedChange={() => props.toggleTodo(todo.id)}
              ></Checkbox>
            </TableCell>
            <TableCell>{todo.text}</TableCell>
            <TableCell className="text-right">
              <Button
                color="error"
                variant="destructive"
                onClick={() => props.removeTodo(todo.id)}
              >
                <Trash />
                Remove
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
