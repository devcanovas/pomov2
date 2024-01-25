import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonIconProps {
  icon: IconProp;
}

export function ButtonIcon({ icon }: ButtonIconProps) {
  return (
    <div>
      <FontAwesomeIcon icon={icon} />
    </div>
  );
}
