import { links } from "../links";
import { Container, Divider, Stack } from "@mui/material";
// import { useMediaQuery } from "@mui/material";

const NoteList = (props: { heading?: string; children: React.ReactNode }) => {
  return (
    <div>
      <h5>{props.heading ?? "Notes"}</h5>
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
  // const isColumn = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const isColumn = false;

  const link = links[props.href]!;

  return (
    <main>
      <Container maxWidth="lg">
        {/* <Stack direction={{ sm: "column", md: "row" }} spacing={2}> */}
        <div>
          {/* <Stack> */}
          <h3>{link.heading}</h3>
          {/* <Typography variant="h3">{link.heading}</Typography> */}
          {props.children}
          {/* </Stack> */}
          {isColumn ? <Divider /> : <Divider orientation="vertical" flexItem />}
          <NoteList heading={props.heading}>{props.notelist}</NoteList>
        </div>
      </Container>
    </main>
  );
};
