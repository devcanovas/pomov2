import { ReactElement } from "react";
import styled from "styled-components";

const H1Styled = styled.h1`
  font-family: "GeistUltraLight";
  font-weight: 200;
  color: #6a6a6a;
  letter-spacing: 1rem;
`;

const Container = styled.div`
  width: 100%;
  text-align: center;
`;

interface TitleProps {
  children: ReactElement | string;
}

export default function Title(props: TitleProps) {
  return (
    <Container>
      <H1Styled>{props.children}</H1Styled>
    </Container>
  );
}
