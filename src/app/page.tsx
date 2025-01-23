"use client";
import { links } from "./links";
import {
  Card,
  CardContent,
  Container,
  styled,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import Grid from "@mui/material/Grid2";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: theme.spacing(2),
  "&:hover": {
    boxShadow: theme.shadows[4],
    transform: "scale(1.02)",
    transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
  },
}));

const StyledLink = styled(NextLink)(() => ({
  textDecoration: "none",
  // Remove all inherited link styles:
  color: "inherit",
  "&:hover": {
    textDecoration: "none",
  },
}));

const LinkCard = (props: {
  href: string;
  heading: string;
  children: React.ReactNode;
}) => {
  return (
    <StyledCard>
      <StyledLink href={props.href}>
        <div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.heading}
            </Typography>
            <Typography>{props.children}</Typography>
          </CardContent>
        </div>
      </StyledLink>
    </StyledCard>
  );
};

export default function HomePage() {
  return (
    <>
      <main>
        <Container maxWidth="lg">
          <Typography variant="h2">
            React <span className="text-grape">Mini </span> Projects
          </Typography>
          <Grid container direction="row" spacing={2}>
            {Object.keys(links).map((url) => (
              <Grid key={url} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <LinkCard key={url} href={url} heading={links[url]!.heading}>
                  {links[url]!.synopsis}
                </LinkCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}
