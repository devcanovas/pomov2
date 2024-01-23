import { ReactNode } from "react";

interface ButtonNeutralProps {
    children: ReactNode
}

export function ButtonNeutral({children}: ButtonNeutralProps) {
    return (
        <button
          className="
        border
        border-zinc-600 
        flex 
        gap-1
        items-center 
        justify-center 
        w-52 
        py-3 
        text-zinc-600 
        hover:bg-zinc-600
        hover:text-zinc-900
        transition duration-200"
        >
          {children}
        </button>
      );
}