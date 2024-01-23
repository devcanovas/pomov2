import styled from "styled-components";

const H2Styled = styled.h2`
  font-family: "GeistUltraLight";
  font-weight: 200;
  color: #6a6a6a;
`;

const Container = styled.div`
  text-align: center;
  padding: 0.5rem;
`;

interface SubtitleProps {
  children: string;
}

export default function Subtitle({ children }: SubtitleProps) {
  return (
    <Container>
      <H2Styled>{children}</H2Styled>
    </Container>
  );
}
