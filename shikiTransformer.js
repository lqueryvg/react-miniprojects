// Adds syntax highlighting to fenced code blocks in mdx files

import { createHighlighter } from "shiki";
import { transformerColorizedBrackets } from "@shikijs/colorized-brackets";

const highlighter = await createHighlighter({
  langs: ["typescript", "javascript", "jsx", "tsx", "css", "html"],
  themes: [],
});
await highlighter.loadTheme("github-dark");

async function visit(tree) {
  if (!tree.children) return;
  for (const node of tree.children) {
    if (node.type === "code") {
      const lang = node.lang || "text";
      const theme = "github-dark"; // Or retrieve theme from config if needed
      try {
        node.value = highlighter.codeToHtml(node.value, {
          lang,
          theme,
          transformers: [transformerColorizedBrackets()],
        });
      } catch (e) {
        console.warn(`Shiki highlighting failed for language '${lang}': ${e}`);
        node.value = `<pre><code>${node.value}</code></pre>`;
      }
      node.type = "html";
    }
    await visit(node);
  }
}

export const shikiTransformer = () => {
  return (tree) => visit(tree);
};
