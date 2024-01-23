import styled from "styled-components";
import { OptionMenu } from "../../shared/classes/OptionMenu";
import MenuLink from "./MenuLink";

const Footer = styled.footer`
  border-top: 1px solid #2e2e2e;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
`;

interface MenuProps {
  options: OptionMenu[];
}

export default function Menu({ options }: MenuProps) {
  return (
    <Footer>
      {options.map((option: OptionMenu) => {
        return <MenuLink key={option.id} option={option} />;
      })}
    </Footer>
  );
}
