"use client";
import { usePageMatter } from "~/lib/pageMatter/hooks";

export const PageHeading = () => {
  const page = usePageMatter();
  return (
    <h1 className="mb-3 mt-3 text-center text-3xl font-bold">{page?.title}</h1>
  );
};
