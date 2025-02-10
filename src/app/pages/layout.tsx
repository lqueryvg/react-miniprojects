import { Separator } from "@shadui/separator";
import { SiteHeader } from "../_components/SiteHeader";
import { Breadcrumbs } from "../_components/Breadcrumbs";
import { Footer } from "../_components/Footer";
import { PageHeading } from "../_components/PageHeading";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <div className="relative flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 w-full">
          <SiteHeader />
          <Breadcrumbs />
        </header>

        <main className="px-2 md:mx-auto">
          <PageHeading />
          <Separator className="my-4 h-1 text-background" />
          <div className="prose dark:prose-invert">{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
