import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@shadui/sheet";
import { VisuallyHidden } from "radix-ui";
import { Menu } from "lucide-react";
import { DocsSidebar } from "./DocsSidebar";
import { Button } from "@shadui/button";

export function SideSheet() {
  return (
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
  );
}
