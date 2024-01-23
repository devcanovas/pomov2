import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { OptionMenu } from "../../../shared/classes/OptionMenu";
import { Constants } from "../../../utils/constants";

interface MenuLinkProps {
  option: OptionMenu;
}

export default function MenuLink({ option }: MenuLinkProps) {
  return (
    <Link
      to={option.to}
      style={{ width: Constants.WIDTH_100, textDecoration: Constants.NONE }}
    >
      <label className="bg-transparent text-[#b17ad8] border-none rounded-md transition duration-75 flex p-[0.5rem] hover:bg-[#2e2e2e] hover:cursor-pointer">
        <FontAwesomeIcon icon={option.icon} style={{ marginRight: "0.5rem" }} />{" "}
        {option.label}
      </label>
    </Link>
  );
}
