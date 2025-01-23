import Link from "@mui/material/Link";

export const URLTextLink = (props: { url: string }) => {
  return (
    <Link
      href={props.url}
      target="_blank" // Open in new tab
      rel="noopener noreferrer" // Security best practice for target="_blank"
    >
      {props.url}
    </Link>
  );
};
