"use client";

import { ReactNode, AbstractView } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

const typeCheck: number = "string";

console.log(typeCheck);

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};
