"use client";

import { Avatar, AvatarFallback } from "@shadui/avatar";
import { ThemeSwitcher } from "~/app/_components/ThemeSwitcher";
import Link from "next/link";

import { Button } from "@shadui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-2 md:px-6">
        {/* left */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-lg">R</div>
            <span className="hidden font-bold sm:inline-block">
              React Mini Projects
            </span>
          </Link>
        </div>
        {/* right */}
        <div className="flex flex-1 items-center justify-end gap-4">
          <nav className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/docs">Link 1</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/components">Link 2</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://github.com">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12C0 17.3 3.438 21.8 8.205 23.385C8.805 23.475 9.025 23.145 9.025 22.845C9.025 22.575 9.015 21.885 9.01 20.935C5.672 21.635 4.968 19.335 4.968 19.335C4.422 17.935 3.633 17.535 3.633 17.535C2.545 16.835 3.705 16.85 3.705 16.85C4.905 16.935 5.515 18.085 5.515 18.085C6.605 19.935 8.335 19.435 9.015 19.135C9.115 18.335 9.445 17.835 9.815 17.535C7.145 17.235 4.345 16.185 4.345 11.535C4.345 10.235 4.805 9.185 5.545 8.385C5.435 8.085 5.105 6.835 5.655 5.135C5.655 5.135 6.545 4.835 9.005 6.435C9.845 6.185 10.745 6.065 11.645 6.065C12.545 6.065 13.445 6.185 14.285 6.435C16.745 4.835 17.635 5.135 17.635 5.135C18.185 6.835 17.855 8.085 17.745 8.385C18.485 9.185 18.945 10.235 18.945 11.535C18.945 16.195 16.145 17.235 13.475 17.535C13.945 17.935 14.355 18.735 14.355 19.935C14.355 21.735 14.345 22.535 14.345 22.845C14.345 23.145 14.565 23.475 15.165 23.385C19.932 21.8 23.37 17.3 23.37 12C23.37 5.37 18 0 12 0Z" />
                </svg>
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <ThemeSwitcher />
            <Avatar className="h-8 w-8">
              <AvatarFallback>Me</AvatarFallback>
            </Avatar>
          </nav>
        </div>
      </div>
    </header>
  );
}
