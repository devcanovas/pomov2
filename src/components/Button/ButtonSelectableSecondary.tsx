import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

interface ButtonSelectableSecondaryProps {
  children: ReactNode;
  iconWhenSelected: IconProp;
  isSelected: boolean;
  onClick?: () => void;
}

export function ButtonSelectableSecondary({
  children,
  iconWhenSelected,
  isSelected,
  onClick,
}: ButtonSelectableSecondaryProps) {
  return (
    <button
      onClick={onClick}
      className={`
        border
        ${
          isSelected
            ? "border-secondary  text-secondary"
            : "border-zinc-600 text-zinc-600 hover:border-secondary  hover:text-secondary "
        }
        flex 
        gap-1 
        items-center 
        justify-center 
        w-52 
        py-3 
        transition duration-200`}
    >
      {isSelected && <FontAwesomeIcon icon={iconWhenSelected} className="text-[#81E6D9]"/>}
      {children}
    </button>
  );
}
