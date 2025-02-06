import NextLink from "next/link";
import { links } from "../links";
import { Card, CardDescription, CardHeader, CardTitle } from "@shadui/card";
import { cn } from "~/lib/utils";

export const LinkCards = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {Object.keys(links).map((url) => (
        <NextLink
          key={url}
          href={url}
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
              <CardTitle>{links[url]!.heading}</CardTitle>
              <CardDescription>{links[url]!.synopsis}</CardDescription>
            </CardHeader>
          </Card>
        </NextLink>
      ))}
    </div>
  );
};
