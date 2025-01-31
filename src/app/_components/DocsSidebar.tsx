"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import { links } from "@/links";

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-full overflow-y-auto">
      <div className="grid grid-flow-row auto-rows-max text-sm">
        {Object.keys(links).map((url) => (
          <div key={url}>
            <Link
              href={url}
              className={cn(
                "flex w-full items-center rounded-md p-2 hover:underline",
                url === pathname && "font-medium text-primary",
              )}
            >
              {url === pathname && "*"}
              {links[url]!.heading}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
