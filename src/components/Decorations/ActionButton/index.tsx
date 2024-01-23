import { ReactElement } from "react";

interface ActionButtonProps {
  children: ReactElement;
  onClick: () => void;
}

export default function ActionButton(props: ActionButtonProps) {
  return (
    <button
      className="inline-flex justify-center items-center w-[30px] h-[30px] text-white transition duration-75 border-none bg-transparent hover:cursor-pointer hover:bg-[#2e2e2e]"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
