"use client";

interface ButtonProps {
  type?: "submit" | "button" | "reset";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ type, children, ...props }) => {
  return (
    <button
      className="bg-cta text-cta-text rounded-md px-2 py-1 text-3xl"
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};
