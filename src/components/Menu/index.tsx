import { OptionMenu } from "../../shared/classes/OptionMenu";
import MenuLink from "./MenuLink";

interface MenuProps {
  options: OptionMenu[];
}

export default function Menu({ options }: MenuProps) {
  return (
    <footer
      className="
      border-t
     border-zinc-700
      border-solid
      fixed
      bottom-0
      left-0
      right-0 p-2"
    >
      {options.map((option: OptionMenu) => {
        return <MenuLink key={option.id} option={option} />;
      })}
    </footer>
  );
}
