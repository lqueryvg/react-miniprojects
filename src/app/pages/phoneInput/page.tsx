import Notes from "./notes.mdx";
import { DemoPage } from "~/app/_components/DemoPage";

const App = () => {
  return (
    <>
      <DemoPage href="/pages/phoneInput">
        <Notes />
      </DemoPage>
    </>
  );
};

export default App;
