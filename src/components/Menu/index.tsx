import { OptionMenu } from "../../shared/classes/OptionMenu";
import MenuLink from "./MenuLink";

interface MenuProps {
  options: OptionMenu[];
}

export default function Menu({ options }: MenuProps) {
  return (
    <footer className="border-t border-[#2e2e2e] border-solid fixed bottom-0 left-0 right-0 p-[0.5rem]">
      {options.map((option: OptionMenu) => {
        return <MenuLink key={option.id} option={option} />;
      })}
    </footer>
  );
}
