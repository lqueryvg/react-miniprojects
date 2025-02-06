"use client";

import { Avatar, AvatarFallback } from "@shadui/avatar";
import { ThemeSwitcher } from "~/app/_components/ThemeSwitcher";
import Link from "next/link";
import { Button } from "@shadui/button";
import { SideSheet } from "./SideSheet";
import { FaGithub } from "react-icons/fa";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-2 md:px-2">
        <SideSheet />

        <h1 className="invisible md:visible">
          <strong>
            React <span className="text-purple-500">Mini </span> Projects
          </strong>
        </h1>

        {/* right */}
        <div className="flex flex-1 items-center justify-end gap-4">
          <nav className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link
                href="https://github.com/lqueryvg/react-miniprojects"
                target="_blank" // Open in new tab
                rel="noopener noreferrer" // Security best practice for target="_blank"
              >
                <FaGithub className="size-6" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <ThemeSwitcher />
            <Avatar className="h-8 w-8">
              <AvatarFallback>JB</AvatarFallback>
            </Avatar>
          </nav>
        </div>
      </div>
    </header>
  );
}
