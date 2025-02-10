import { useContext } from "react";
import { usePathname } from "next/navigation";
import { PageMatterContext } from "./context";

export const usePageMatterIndex = () => useContext(PageMatterContext);

export const usePageMatter = () => {
  const pathname = usePathname();
  const { pages } = usePageMatterIndex();
  return pages?.[pathname];
};
