import type { Viewport, Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
const inter = Inter({ subsets: ["latin"] });
import "~/styles/globals.css";
import { getPageMatterIndex } from "~/lib/pageMatter/getIndex";
import React from "react";
import { PageMatterProvider } from "~/lib/pageMatter/context";

export const metadata: Metadata = {
  title: "React Mini Projects",
  description: "React Mini Projects",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pages = await getPageMatterIndex();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div>
            <PageMatterProvider pages={pages}>
              <div>{children}</div>
            </PageMatterProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
