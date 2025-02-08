import Notes from "./notes.mdx";
import { DemoPage } from "~/app/_components/DemoPage";

const App = () => {
  return (
    <>
      <DemoPage href="/pages/mdx" notelist={<Notes />}>
        <div className="prose dark:prose-invert">Some text</div>
      </DemoPage>
    </>
  );
};

export default App;
