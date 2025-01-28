import { links } from "../links";
import { Separator } from "~/components/ui/separator";
import { SiteHeader } from "./SiteHeader";
import { MobileNav } from "./MobileNav";

const NoteList = (props: { heading?: string; children: React.ReactNode }) => {
  return (
    <div className="prose dark:prose-invert w-[60ch]">
      <h2>{props.heading ?? "Notes"}</h2>
      <ul>{props.children}</ul>
    </div>
  );
};

export const DemoPageShadReal = (props: {
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
            <h1 className="mb-4 text-3xl font-bold">{link.heading}</h1>
            {props.children}
            <Separator className="my-4 h-1 text-background" />
            <NoteList heading={props.heading}>{props.notelist}</NoteList>
          </div>
        </main>
      </div>
    </>
  );
};
