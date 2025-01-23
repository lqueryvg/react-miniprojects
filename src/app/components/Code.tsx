import { Typography, Paper } from "@mui/material";

export const Code = (props: {
  children: React.ReactNode;
  inline?: boolean;
}) => {
  const commonStyles = {
    fontFamily: "Monospace",
    ...(props.inline
      ? {
          padding: "1px 1px",
          borderRadius: "4px",
        }
      : {
          whiteSpace: "pre-wrap",
          wordBreak: "break-all",
        }),
  };

  return props.inline ? (
    <Typography component="code" sx={commonStyles}>
      {props.children}
    </Typography>
  ) : (
    <Paper elevation={3} sx={{ padding: 2, overflowX: "auto" }}>
      <Typography component="pre" sx={commonStyles}>
        {props.children}
      </Typography>
    </Paper>
  );
};
