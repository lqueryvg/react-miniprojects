// "use client";
import { links } from "./links";
import NextLink from "next/link";
import { ThemeProvider } from "next-themes";
import "~/styles/globals.css";

// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { SiteHeader } from "./components/SiteHeader";

export default function HomePage() {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <div className="relative mx-auto flex min-h-screen flex-col p-4">
          <header className="sticky top-0 z-50 w-full">
            <SiteHeader />
          </header>

          <main>
            <h1 className="my-4 text-7xl">
              React <span className="text-purple-500">Mini </span> Projects
            </h1>
            <div className="flex flex-wrap">
              {Object.keys(links).map((url) => (
                <Card key={url} className="w-[250px]">
                  <CardHeader>
                    <CardTitle>{links[url]!.heading}</CardTitle>
                    <CardDescription>{links[url]!.synopsis}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-end">
                    <NextLink href={url}>View</NextLink>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}
