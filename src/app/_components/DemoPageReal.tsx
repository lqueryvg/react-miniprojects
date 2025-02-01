import { links } from "../links";
import { Separator } from "@shadui/separator";
import { SiteHeader } from "./SiteHeader";
import { MobileNav } from "./MobileNav";

const NoteList = (props: { heading?: string; children: React.ReactNode }) => {
  return (
    <div className="prose dark:prose-invert">
      <ul>{props.children}</ul>
    </div>
  );
};

export const DemoPageReal = (props: {
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
          <MobileNav heading={link.heading} href={props.href} />
        </header>

        <main className="flex flex-col">
          <div className="flex flex-col items-center">
            <h1 className="mb-3 mt-3 text-3xl font-bold">{link.heading}</h1>
            {props.children}
            <Separator className="my-4 h-1 text-background" />
            <h2 className="mb-4 text-2xl font-bold">Features</h2>
            <NoteList>{props.notelist}</NoteList>
          </div>
        </main>
      </div>
    </>
  );
};
