import { FaLinkedin, FaGithub } from "react-icons/fa";

const sections = [
  {
    title: "Technologies",
    links: [
      { name: "Tailwind", href: "https://v3.tailwindcss.com" },
      { name: "shadcn/ui", href: "https://ui.shadcn.com/" },
      { name: "NextJS", href: "https://nextjs.org/" },
      { name: "React", href: "https://react.dev" },
      { name: "Typescript", href: "https://www.typescriptlang.org/" },
      {
        name: "Github Actions",
        href: "https://github.com/lqueryvg/react-miniprojects/actions",
      },
      { name: "Cypress", href: "https://www.cypress.io/" },
      { name: "Vercel", href: "https://vercel.com/" },
      { name: "MDX", href: "https://mdxjs.com/" },
    ],
  },
];

export const Footer = () => {
  return (
    <section className="pb-6 pt-64">
      <div className="container">
        <footer>
          <div className="flex flex-col items-center justify-between gap-10 border-t pt-36 text-center">
            <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6">
              <div>
                <p className="text-3xl font-semibold">React Mini Projects</p>
                <p className="mt-6 text-sm text-muted-foreground">
                  A small personal project exploring React and related
                  technologies.
                </p>
              </div>
              <ul className="flex items-center space-x-6 text-muted-foreground">
                <li className="font-medium hover:text-primary">
                  <a href="https://www.linkedin.com/in/johnbuxton/">
                    <FaLinkedin className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="https://github.com/lqueryvg">
                    <FaGithub className="size-6" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:gap-20">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-6 font-bold">{section.title}</h3>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="font-medium hover:text-primary"
                      >
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
            <p>© 2025 John Buxton. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </section>
  );
};
