import { ReactElement } from "react";

interface TitleProps {
  children: ReactElement | string;
}

export default function Title(props: TitleProps) {
  return (
      <h1 className="font-light text-zinc-600 tracking-[1rem] text-3xl">
        {props.children}
      </h1>
  );
}
