"use server";
import fs from "fs";
import matter from "gray-matter";
import { glob } from "glob";

export type PageMatter = {
  slug: string;
  title?: string;
  synopsis?: string;
};

export async function getPageMatterIndex() {
  const pagesDirectory = `${process.cwd()}/src/app`;
  const mdxFiles: string[] = glob.sync(`${pagesDirectory}/**/page.mdx`);
  const pages: Record<string, PageMatter> = {};

  for (const filePath of mdxFiles) {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);

    const slug = filePath.replace(pagesDirectory, "").replace("/page.mdx", "");

    pages[slug] = {
      slug,
      title: data.title as string | undefined,
      synopsis: data.synopsis as string | undefined,
    };
  }

  return pages;
}
