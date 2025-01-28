"use client";
import { DemoPageShadReal } from "./DemoPageShadReal";
// import ThemeProviderWrapper from "./ThemeProviderWrapper";
import { ThemeProvider } from "next-themes";
import "~/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const DemoPageShad = (props: {
  href: string;
  notelist: React.ReactNode;
  heading?: string;
  children: React.ReactNode;
}) => {
  return (
    // <ThemeProviderWrapper>
    // <ThemeProvider>
    <div className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
        <DemoPageShadReal {...props} />
      </ThemeProvider>
    </div>
    // </ThemeProviderWrapper>
  );
};
