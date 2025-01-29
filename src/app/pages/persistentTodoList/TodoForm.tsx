"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@shadui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@shadui/form";
import { Input } from "@shadui/input";
import { Checkbox } from "@shadui/checkbox";

const formSchema = z.object({
  todoText: z.string().min(2).max(50),
  simulateSubmissionError: z.boolean(),
});

type TodoFormValues = z.infer<typeof formSchema>;

function TodoForm(props: { onSubmit: (values: TodoFormValues) => void }) {
  const form = useForm<TodoFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      todoText: "",
      simulateSubmissionError: false,
    },
  });

  const handleSubmit = (values: TodoFormValues) => {
    try {
      props.onSubmit(values);
      form.resetField("todoText");
    } catch (error) {
      form.setError("todoText", {
        type: "manual",
        message: "Submission failed",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="mx-auto max-w-3xl space-y-8 py-10"
      >
        <FormField
          control={form.control}
          name="todoText"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Todo text</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter todo text..."
                  type="text"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="simulateSubmissionError"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Simulate submission error.</FormLabel>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export { TodoForm };
export type { TodoFormValues };
