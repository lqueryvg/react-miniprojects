"use client";
import { usePageMatterIndex } from "~/lib/pageMatter/hooks";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";

export function DocsSidebar() {
  const pathname = usePathname();
  const { pages } = usePageMatterIndex();

  return (
    <div className="w-full overflow-y-auto">
      <div className="grid grid-flow-row auto-rows-max text-sm">
        {Object.values(pages!).map((page) => (
          <div key={page.slug}>
            <Link
              href={page.slug}
              className={cn(
                "flex w-full items-center rounded-md p-2 hover:underline",
                page.slug === pathname && "font-medium text-primary",
              )}
            >
              {page.slug === pathname && "* "}
              {page.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
