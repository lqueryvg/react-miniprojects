"use client";

import { Menu } from "lucide-react";
import { VisuallyHidden } from "radix-ui";
import { Button } from "@shadui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@shadui/sheet";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@shadui//breadcrumb";
import { DocsSidebar } from "./DocsSidebar";

export function MobileNav(props: { heading: string; href: string }) {
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

      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {/* <BreadcrumbItem>
            <BreadcrumbLink href={props.href}>{props.heading}</BreadcrumbLink>
          </BreadcrumbItem> */}
          {/* <BreadcrumbSeparator /> */}
          <BreadcrumbItem>
            <BreadcrumbPage>{props.heading}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* <div className="flex items-center gap-2 font-medium">
        <span className="text-sm text-muted-foreground">Docs</span>
        <span className="text-sm text-muted-foreground">/</span>
        <span className="text-sm">Installation</span>
      </div> */}
    </div>
  );
}
