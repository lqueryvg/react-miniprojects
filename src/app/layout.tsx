import { type Metadata } from "next";
// import ThemeProviderWrapper from "./components/ThemeProviderWrapper";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Mini Projects",
  description: "React Mini Projects",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* <div className="min-w-[50%]">body test div</div> */}
        {/* <ThemeProviderWrapper>{children}</ThemeProviderWrapper> */}
        {children}
      </body>
    </html>
  );
}
