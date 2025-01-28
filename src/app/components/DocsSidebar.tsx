"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";

const sidebarItems = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Installation",
        href: "/",
        active: true,
      },
      {
        title: "Editor Setup",
        href: "/editor-setup",
      },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      {
        title: "Utility Classes",
        href: "/utility-classes",
      },
      {
        title: "Responsive Design",
        href: "/responsive-design",
      },
      {
        title: "Dark Mode",
        href: "/dark-mode",
      },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-full overflow-y-auto">
      {sidebarItems.map((section, index) => (
        <div key={index} className="pb-8">
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium">
            {section.title}
          </h4>
          <div className="grid grid-flow-row auto-rows-max text-sm">
            {section.items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex w-full items-center rounded-md p-2 hover:underline",
                  item.href === pathname && "font-medium text-primary",
                  item.active && "font-medium text-primary",
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
