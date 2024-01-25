import { ReactNode, SetStateAction } from "react";

interface ButtonPrimaryProps {
  children: ReactNode;
  onClick?: () => void;
}

export function ButtonPrimary({ children, onClick }: ButtonPrimaryProps) {
  return (
    <button
      className="
    border
    border-primary 
    flex 
    gap-1
    items-center 
    justify-center 
    w-52 
    py-3 
    text-primary 
    hover:bg-primary
    hover:text-zinc-900
    transition duration-200"
    onClick={onClick}
    >
      {children}
    </button>
  );
}
