import { ReactElement } from "react";
import styled from "styled-components";

interface ActionButtonProps {
  children: ReactElement;
  onClick: () => void;
}

const ButtonStyled = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  color: white;
  transition: 0.5s;
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
    background-color: #2e2e2e;
  }
`;

export default function ActionButton(props: ActionButtonProps) {
  return <ButtonStyled onClick={props.onClick}>{props.children}</ButtonStyled>;
}
