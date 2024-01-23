import { ReactElement } from "react";

interface TitleProps {
  children: ReactElement | string;
}

export default function Title(props: TitleProps) {
  return (
    <div className="w-full text-center">
      <h1 className="font-light text-[#6a6a6a] tracking-[1rem]">
        {props.children}
      </h1>
    </div>
  );
}
