import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { glob } from "glob";

const pagesDirectory = path.join(process.cwd(), "src", "app", "pages");
console.log({ pagesDirectory });

interface PageData {
  slug: string;
  title?: string;
  synopsis?: string;
}

export async function getPageData(): Promise<Record<string, PageData>> {
  const mdxFiles: string[] = glob.sync(`${pagesDirectory}/**/page.mdx`);
  const pages: Record<string, PageData> = {};

  for (const filePath of mdxFiles) {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);
    console.log(data);
    const slug = filePath
      .replace(pagesDirectory, "")
      .replace("/page.mdx", "")
      .replace(/^\//, ""); // Remove leading slash

    pages[slug] = {
      slug: `pages/${slug}`,
      title: data.title as string | undefined, // Type assertion for title
      synopsis: data.synopsis as string | undefined, // Type assertion for synopsis
    };
  }

  return pages;
}
