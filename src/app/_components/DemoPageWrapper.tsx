import { DemoPage } from "./DemoPage";
import { ThemeProvider } from "next-themes";
import "~/styles/globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@shadui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const DemoPageWrapper = (props: {
  href: string;
  notelist: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <Toaster />
        <DemoPage {...props} />
      </ThemeProvider>
    </div>
  );
};
