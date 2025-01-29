import { links } from "../links";
import { Separator } from "@shadui/separator";
import { SiteHeader } from "./SiteHeader";
import { MobileNav } from "./MobileNav";

const NoteList = (props: { heading?: string; children: React.ReactNode }) => {
  return (
    <div className="prose w-[60ch] dark:prose-invert">
      <h2>{props.heading ?? "Notes"}</h2>
      <ul>{props.children}</ul>
    </div>
  );
};

export const DemoPageReal = (props: {
  href: string;
  notelist: React.ReactNode;
  heading?: string;
  children: React.ReactNode;
}) => {
  const link = links[props.href]!;

  return (
    <>
      <div className="relative flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 w-full">
          <SiteHeader />
          <MobileNav />
        </header>

        <main className="flex flex-col gap-10">
          <div className="mx-auto p-4">
            <div className="flex flex-col items-center gap-10">
              <h1 className="mb-4 text-3xl font-bold">{link.heading}</h1>
              {props.children}
              <Separator className="my-4 h-1 text-background" />
              <NoteList heading={props.heading}>{props.notelist}</NoteList>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
