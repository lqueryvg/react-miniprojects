import { links } from "../links";
import { Container, Divider, Stack, Typography } from "@mui/material";
// import { useMediaQuery } from "@mui/material";
import { Separator } from "~/components/ui/separator";
import { ThemeSwitcher } from "~/components/theme-switcher";
import { SiteHeader } from "./SiteHeader";
import { MobileNav } from "./MobileNav";

const NoteList = (props: { heading?: string; children: React.ReactNode }) => {
  return (
    <div className="prose dark:prose-invert w-[60ch]">
      {/* <h2 className="text-2xl">{props.heading ?? "Notes"}</h2> */}
      <h2>{props.heading ?? "Notes"}</h2>
      {/* <Typography component="ul" variant="h3"> */}
      {/* <ul> */}

      {/* <ul className="my-6 ml-6 list-disc text-pretty [&>li]:mt-2"> */}
      <ul>{props.children}</ul>

      {/* {props.children} */}
      {/* </Typography> */}
    </div>
  );
};

export const DemoPageShadReal = (props: {
  href: string;
  notelist: React.ReactNode;
  heading?: string;
  children: React.ReactNode;
}) => {
  // const isColumn = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const link = links[props.href]!;

  return (
    <>
      {/* <header className="flex justify-end p-4"> */}
      <div className="relative flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 w-full">
          <SiteHeader />
          <MobileNav />
        </header>

        {/* <header className="flex justify-end p-1">
          <ThemeSwitcher />
        </header> */}
        <main className="flex flex-col gap-10">
          <div className="mx-auto p-4">
            {/* <div className="container mx-auto p-4"> */}
            <h1 className="mb-4 text-3xl font-bold">{link.heading}</h1>
            {/* <div className="sm:flex"> */}
            {/* <div className="justify-evenly sm:flex"> */}
            {/* <p>Aadskjdsa</p>
            <p>Bsadkjads</p>
            <p>Cadkjads</p> */}
            {/* <div className="min-w-[75%]">{props.children}</div> */}
            {/* <div className="">{props.children}</div> */}
            {props.children}
            <Separator className="my-4 h-1 text-background" />
            {/* <div className="min-w-md">test div right</div> */}
            {/* <div>test div right</div> */}
            <NoteList heading={props.heading}>{props.notelist}</NoteList>
          </div>
          {/* </div> */}
        </main>
      </div>
    </>
  );
};
