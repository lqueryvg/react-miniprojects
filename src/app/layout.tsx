import { type Metadata } from "next";
import ThemeProviderWrapper from "./components/ThemeProviderWrapper";

export const metadata: Metadata = {
  title: "React Mini Projects",
  description: "React Mini Projects",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
