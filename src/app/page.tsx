import { ThemeProvider } from "next-themes";
import { SiteHeader } from "./_components/SiteHeader";
import { Footer } from "./_components/Footer";
import { HeroText } from "~/app/_components/HeroText";
import { LinkCards } from "~/app/_components/LinkCards";
import "~/styles/globals.css";

export default function HomePage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="relative mx-auto flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 w-full">
          <SiteHeader />
        </header>

        <main className="px-4">
          <HeroText />
          <LinkCards />
        </main>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}
