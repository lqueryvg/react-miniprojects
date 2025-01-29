export const URLTextLink = (props: { url: string }) => {
  return (
    <a
      href={props.url}
      target="_blank" // Open in new tab
      rel="noopener noreferrer" // Security best practice for target="_blank"
    >
      {props.url}
    </a>
  );
};
