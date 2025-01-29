import { DemoPageReal } from "./DemoPageReal";
import { ThemeProvider } from "next-themes";
import "~/styles/globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "~/lib/shadcn/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const DemoPage = (props: {
  href: string;
  notelist: React.ReactNode;
  heading?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <Toaster />
        <DemoPageReal {...props} />
      </ThemeProvider>
    </div>
  );
};
