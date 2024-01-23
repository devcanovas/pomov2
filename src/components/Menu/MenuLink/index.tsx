import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { OptionMenu } from "../../../shared/classes/OptionMenu";

interface MenuLinkProps {
  option: OptionMenu;
}

export default function MenuLink({ option }: MenuLinkProps) {
  return (
    <Link to={option.to}>
      <label
        className="bg-transparent
          text-[#b17ad8]
            border-none
            rounded-md 
            transition
            duration-75 flex p-[0.5rem]
          hover:bg-zinc-800
            hover:cursor-pointer
            gap-2"
      >
        <div>
          <FontAwesomeIcon icon={option.icon} />
        </div>
        <div>{option.label}</div>
      </label>
    </Link>
  );
}
