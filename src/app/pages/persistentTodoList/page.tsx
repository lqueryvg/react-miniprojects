"use client";

import { DemoPage } from "~/app/_components/DemoPage";
import Notes from "./notes.mdx";

export default function Wrapper() {
  return (
    <DemoPage href="/pages/persistentTodoList">
      <Notes />{" "}
    </DemoPage>
  );
}
