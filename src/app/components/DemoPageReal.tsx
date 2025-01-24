import { links } from "../links";
import { Container, Divider, Stack, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const NoteList = (props: { heading?: string; children: React.ReactNode }) => {
  return (
    <div>
      <Typography variant="h5">{props.heading ?? "Notes"}</Typography>
      <Typography component="ul" variant="h3">
        {props.children}
      </Typography>
    </div>
  );
};

export const DemoPageReal = (props: {
  href: string;
  notelist: React.ReactNode;
  heading?: string;
  children: React.ReactNode;
}) => {
  const isColumn = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const link = links[props.href]!;

  return (
    <main>
      <Container maxWidth="lg">
        <Stack direction={{ sm: "column", md: "row" }} spacing={2}>
          <Stack>
            <Typography variant="h3">{link.heading}</Typography>
            {props.children}
          </Stack>
          {isColumn ? <Divider /> : <Divider orientation="vertical" flexItem />}
          <NoteList heading={props.heading}>{props.notelist}</NoteList>
        </Stack>
      </Container>
    </main>
  );
};
