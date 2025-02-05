export const Footer = () => {
  return (
    <footer className="mx-2 mt-16 text-sm leading-6">
      <div className="w-full border-t border-slate-200 pb-28 pt-10 text-slate-500 dark:border-slate-200/5">
        <p>Copyright © John Buxton</p>
        <div className="mt-10 justify-end space-x-5 text-slate-400 dark:text-slate-500 sm:flex">
          <a
            href="https://v3.tailwindcss.com/"
            className="hover:text-slate-500 dark:hover:text-slate-400"
          >
            Tailwind
          </a>
          <a
            href="https://react.dev/"
            className="hover:text-slate-500 dark:hover:text-slate-400"
          >
            React
          </a>
          <a
            href="https://nextjs.org/"
            className="hover:text-slate-500 dark:hover:text-slate-400"
          >
            Next.js
          </a>
          <a
            href="https://www.typescriptlang.org/"
            className="hover:text-slate-500 dark:hover:text-slate-400"
          >
            TypeScript
          </a>
          <a
            href="https://ui.shadcn.com/"
            className="hover:text-slate-500 dark:hover:text-slate-400"
          >
            shadcn/ui
          </a>
        </div>
      </div>
    </footer>
  );
};
