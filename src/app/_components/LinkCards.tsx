"use client";
import NextLink from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@shadui/card";
import { cn } from "~/lib/utils";
import { usePageMatterIndex } from "~/lib/pageMatter/hooks";

export const LinkCards = () => {
  const { pages } = usePageMatterIndex();
  return (
    <div className="flex flex-wrap justify-center">
      {Object.values(pages!).map((page) => (
        <NextLink
          key={page.slug}
          href={page.slug}
          className="block" // Ensures the link takes full width
        >
          <Card
            className={cn(
              "w-[250px]", // Set width
              "h-[120px]", // Set width
              "transition-colors", // Add smooth color transition
              "hover:bg-accent/50", // Hover effect
              "cursor-pointer", // Show pointer cursor on hover
            )}
          >
            <CardHeader>
              <CardTitle>{page.title}</CardTitle>
              <CardDescription>{page.synopsis}</CardDescription>
            </CardHeader>
          </Card>
        </NextLink>
      ))}
    </div>
  );
};
