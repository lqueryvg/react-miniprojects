"use client";

import { DemoPage } from "~/app/_components";

function App() {
  return (
    <div className="prose dark:prose-invert">
      <h3>Typography Examples</h3>
      <p>
        This page demonstrates Shadcn Typography. Come here occasionally during
        development to check how the theme looks. This long paragraph
        demonstrates word wrapping.
      </p>
      <p>
        All text on this page uses basic html tags with no{" "}
        <code>className</code>props. Except for the enclosing <code>div</code>{" "}
        which has
        <code>className="prose dark:prose-invert"</code> and the coloured text
        below.
      </p>
      <p>
        This paragraph contains a very long word to see how word wrap works with
        veryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryvery
        long words.
      </p>
      <ul>
        <li>
          <code>span</code> with a <code>className</code>can be used to colour
          text <span className="text-purple-500">like this </span>
        </li>
        <li>
          <code>code</code> looks like <code>this</code>
        </li>
        <li>
          <code>strong</code> (bold) looks like <strong>this</strong>
        </li>
        <li>
          <code>em</code> (emphasis) looks like <em>this</em>
        </li>
        <li>
          <code>a</code> links look like <a href="#">this</a>
        </li>
        <li>
          <code>pre</code> (preformatted) lines look like this:
          <pre>
            {`const form = useForm({
  resolver: zodResolver(formSchema),
  defaultValues: {
    todoText: "",
    simulateSubmissionError: false,
  },
});
`}
          </pre>
        </li>
        <li>
          <code>blockquote</code> lines look like this:
          <blockquote>
            "After all," he said, "everyone enjoys a good joke, so it's only
            fair that they should pay for the privilege."
          </blockquote>
        </li>
      </ul>
      <h1>h1 Heading</h1>
      <h2>h2 Heading</h2>
      <h3>h3 Heading</h3>
      <h4>h4 Heading</h4>
      <h5>h5 Heading</h5>
      <h6>h6 Heading</h6>

      <p>A basic table.</p>
      <div>
        <table>
          <thead>
            <tr>
              <th>King's Treasury</th>
              <th>People's happiness</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Empty</td>
              <td>Overflowing</td>
            </tr>
            <tr>
              <td>Modest</td>
              <td>Satisfied</td>
            </tr>
            <tr>
              <td>Full</td>
              <td>Ecstatic</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function Wrapper() {
  const notelist = (
    <>
      <li>testing tailwind prose</li>
    </>
  );

  return (
    <DemoPage
      href="/pages/scratchpad"
      notelist={notelist}
      heading="Functional Requirements"
    >
      <App />
    </DemoPage>
  );
}
