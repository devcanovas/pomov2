import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode, useState } from "react";

interface ButtonSelectableSecondaryProps {
  children: ReactNode;
  iconWhenSelected: IconProp;
}

export function ButtonSelectableSecondary({
  children,
  iconWhenSelected,
}: ButtonSelectableSecondaryProps) {
  const [isSelected, setSelected] = useState(false);
  return (
    <button
      onClick={() => setSelected(!isSelected)}
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
      {isSelected && <FontAwesomeIcon icon={iconWhenSelected} />}
      {children}
    </button>
  );
}
