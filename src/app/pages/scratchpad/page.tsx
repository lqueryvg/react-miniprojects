"use client";

import { DemoPageShad } from "@/components";

function App() {
  return (
    <>
      <h1>Customized Typography Example</h1>
      <p>
        This is a paragraph with custom styles applied through the theme. It
        demonstrates how to change the default look of the &lt;p&gt; tag. You
        can use <strong>strong</strong> or <em>emphasized</em> text within the
        paragraph, and they will also be styled. This is very long text to
        demonstrate word wrapping.
      </p>
      <p>Another paragraph with the same custom styles.</p>
      <h2>A h2 Heading</h2>
      <p>More text.</p>
    </>
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
    <DemoPageShad
      href="/pages/phoneInput"
      notelist={notelist}
      heading="Functional Requirements"
    >
      <App />
    </DemoPageShad>
  );
}
