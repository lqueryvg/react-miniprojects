export const Code = (props: {
  children: React.ReactNode;
  inline?: boolean;
}) => {
  return props.inline ? (
    // <code className="pl-1 pr-1 text-destructive">{props.children}</code>
    <code>{props.children}</code>
  ) : (
    // <pre className="overflow-x-auto rounded-lg border-l-2 pl-6 leading-10 text-destructive">
    //   {props.children}
    // </pre>
    // <pre className="prose">{props.children}</pre>
    <pre>{props.children}</pre>
  );
};
