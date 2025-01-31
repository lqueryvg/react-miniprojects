// "use client";
import { links } from "./links";
import NextLink from "next/link";
import { ThemeProvider } from "next-themes";
import "~/styles/globals.css";
import { Card, CardDescription, CardHeader, CardTitle } from "@shadui/card";
import { SiteHeader } from "./_components/SiteHeader";
import { cn } from "~/lib/utils";

export default function HomePage() {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <div className="relative mx-auto flex min-h-screen flex-col p-4">
          <header className="sticky top-0 z-50 w-full">
            <SiteHeader />
          </header>

          <main>
            <h1 className="my-4 text-center text-7xl">
              React <span className="text-purple-500">Mini </span> Projects
            </h1>
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
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}
