import { links } from "../links";
import { Separator } from "@shadui/separator";
import { SiteHeader } from "./SiteHeader";
import { Breadcrumbs } from "./Breadcrumbs";
import { Footer } from "./Footer";

export const DemoPage = (props: {
  href: string;
  children: React.ReactNode;
}) => {
  const link = links[props.href]!;

  return (
    <>
      <div className="relative flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 w-full">
          <SiteHeader />
          <Breadcrumbs heading={link.heading} href={props.href} />
        </header>

        <main className="px-2 md:mx-auto">
          <h1 className="mb-3 mt-3 text-center text-3xl font-bold">
            {link.heading}
          </h1>
          <Separator className="my-4 h-1 text-background" />
          <div className="prose dark:prose-invert">{props.children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
};
