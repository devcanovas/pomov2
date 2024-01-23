import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { OptionMenu } from "../../../shared/classes/OptionMenu";
import { Constants } from "../../../utils/constants";

const LabelStyled = styled.label`
  background-color: transparent;
  color: #b17ad8;
  border: none;
  border-radius: 14px;
  transition: 0.5s;
  display: flex;
  padding: 0.5rem;
  &:hover {
    background-color: #2e2e2e;
    cursor: pointer;
  }
`;

interface MenuLinkProps {
  option: OptionMenu;
}

export default function MenuLink({ option }: MenuLinkProps) {
  return (
    <Link
      to={option.to}
      style={{ width: Constants.WIDTH_100, textDecoration: Constants.NONE }}
    >
      <LabelStyled>
        <FontAwesomeIcon icon={option.icon} style={{ marginRight: "0.5rem" }} />{" "}
        {option.label}
      </LabelStyled>
    </Link>
  );
}
