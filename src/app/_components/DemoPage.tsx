import { links } from "../links";
import { Separator } from "@shadui/separator";
import { SiteHeader } from "./SiteHeader";
import { Breadcrumbs } from "./Breadcrumbs";
import { Footer } from "./Footer";

export const DemoPage = (props: {
  href: string;
  notelist: React.ReactNode;
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
          {props.children}
          <Separator className="my-4 h-1 text-background" />
          <h2 className="mb-4 justify-center text-center text-2xl">Features</h2>
          <div className="prose dark:prose-invert">
            <ul>{props.notelist}</ul>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};
