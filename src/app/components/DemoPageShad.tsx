import { DemoPageShadReal } from "./DemoPageShadReal";
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
    <div className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <DemoPageShadReal {...props} />
      </ThemeProvider>
    </div>
  );
};
