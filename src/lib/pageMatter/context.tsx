"use client";

import { createContext } from "react";
import type { PageMatter } from "./getIndex";

type PageDataRecord = Record<string, PageMatter>;

export const PageMatterContext = createContext<{
  pages: PageDataRecord | null;
}>({ pages: null });

export const PageMatterProvider = ({
  pages,
  children,
}: Readonly<{ pages: PageDataRecord; children: React.ReactNode }>) => {
  return (
    <PageMatterContext.Provider value={{ pages }}>
      {children}
    </PageMatterContext.Provider>
  );
};
