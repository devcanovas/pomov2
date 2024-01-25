import { ReactNode } from "react";

interface ButtonSecondaryProps {
    children: ReactNode
    type: "submit" | "reset" | "button" | undefined
}

export function ButtonSecondary({ type, children }: ButtonSecondaryProps) {
    return (
      <button
        className="
      border
      border-secondary 
      flex 
      gap-1 
      items-center 
      justify-center 
      w-52 
      py-3 
      text-secondary 
      hover:bg-secondary
      hover:text-zinc-900
      transition duration-200"
      type={type}
      >
        {children}
      </button>
    );
  }