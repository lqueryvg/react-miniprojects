export const Code = (props: {
  children: React.ReactNode;
  inline?: boolean;
}) => {
  return props.inline ? (
    <code>{props.children}</code>
  ) : (
    <pre>{props.children}</pre>
  );
};
