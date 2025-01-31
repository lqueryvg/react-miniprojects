"use client";

import { DemoPage } from "~/app/_components/DemoPage";

function App() {
  return (
    <div className="prose dark:prose-invert">
      <h3>Customized Typography Example</h3>
      <p>
        This is a paragraph with{" "}
        <span className="text-purple-500">custom styles </span> applied through
        the theme. It demonstrates how to change the default look of the
        &lt;p&gt; tag. You can use <strong>strong</strong> or{" "}
        <em>emphasized</em> text within the paragraph, and they will also be
        styled. This is very long text to demonstrate word wrapping.
      </p>
      <pre>some code goes here</pre>
      <p>Another paragraph with the same custom styles.</p>
      <h2>A h2 Heading</h2>
      <p>
        More text with <span className="text-purple-500">colored text</span>{" "}
        included.
      </p>
    </div>
  );
}

// export default App;

export default function Wrapper() {
  const notelist = (
    <>
      <li>testing tailwind prose</li>
    </>
  );

  return (
    <DemoPage href="/pages/scratchpad" notelist={notelist}>
      <App />
    </DemoPage>
  );
}
