/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import("./src/env.js");
import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMDXFrontmatter from "remark-mdx-frontmatter";
import { createHighlighter } from "shiki";
import rehypeRaw from "rehype-raw";
import { shikiTransformer } from "./shikiTransformer.js";

/** @type {import("next").NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // WARNING: assumes linting is elsewhere in  pipeline
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const highlighter = await createHighlighter({
  langs: ["typescript", "javascript", "jsx", "tsx", "css", "html"],
  themes: [],
});
highlighter.loadTheme("github-dark");

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMDXFrontmatter, shikiTransformer],
    rehypePlugins: [
      [
        rehypeRaw,
        {
          passThrough: [
            "mdxjsEsm",
            "mdxJsxFlowElement",
            "mdxJsxTextElement",
            "mdxTextExpression",
          ],
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
