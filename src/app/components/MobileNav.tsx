"use client";

import { Menu } from "lucide-react";

import { Button } from "~/lib/shadcn/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/lib/shadcn/components/ui/sheet";
import { VisuallyHidden } from "radix-ui";
import { DocsSidebar } from "./DocsSidebar";

export function MobileNav() {
  return (
    <div className="flex h-14 items-center border-b bg-background px-4 lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="mr-2">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72">
          <SheetHeader>
            <VisuallyHidden.Root>
              This is here to prevent a console warning. It will not be seen by
              the user.
              <SheetTitle />
              <SheetDescription>Description goes here</SheetDescription>
            </VisuallyHidden.Root>
          </SheetHeader>

          <DocsSidebar />
        </SheetContent>
      </Sheet>
      <div className="flex items-center gap-2 font-medium">
        <span className="text-sm text-muted-foreground">Docs</span>
        <span className="text-sm text-muted-foreground">/</span>
        <span className="text-sm">Installation</span>
      </div>
    </div>
  );
}
