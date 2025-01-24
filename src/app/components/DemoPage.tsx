import { DemoPageReal } from "./DemoPageReal";
import ThemeProviderWrapper from "./ThemeProviderWrapper";

export const DemoPage = (props: {
  href: string;
  notelist: React.ReactNode;
  heading?: string;
  children: React.ReactNode;
}) => {
  return (
    <ThemeProviderWrapper>
      <DemoPageReal {...props} />
    </ThemeProviderWrapper>
  );
};
