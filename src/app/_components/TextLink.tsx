export const TextLink = (props: { url: string; text?: string }) => {
  return (
    <a
      href={props.url}
      target="_blank" // Open in new tab
      rel="noopener noreferrer" // Security best practice for target="_blank"
    >
      {props.text ?? props.url}
    </a>
  );
};
