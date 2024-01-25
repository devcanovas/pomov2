import { ReactNode } from "react";

interface InputRootProps {
  children: ReactNode;
}

export function InputRoot({ children }: InputRootProps) {
  return (
    <div className="flex flex-col items-center justify-center pb-4">
      {children}
    </div>
  );
}
