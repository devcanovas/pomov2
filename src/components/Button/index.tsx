import styled from "styled-components";

const ButtonStyled = styled.button<{ $color: string }>`
  color: ${(props) => props.$color};
  border: 1px solid ${(props) => props.$color};
  background-color: transparent;
  padding: 1rem 1.5rem;
  font-family: "GeistUltraLight";
  font-size: 12px;
  transition: 0.5s;
  width: 100%;
  text-align: center;
  &:hover {
    background-color: ${(props) => props.$color};
    color: black;
    cursor: pointer;
  }
`;

interface ButtonProps {
  color: string;
  children: React.ReactNode;
}

export default function Button({ color, children }: ButtonProps) {
  return <ButtonStyled $color={color}>{children}</ButtonStyled>;
}
