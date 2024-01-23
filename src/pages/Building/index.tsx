import styled from "styled-components";
import gif from "/images/giphy.gif";
import Subtitle from "../../components/Subtitle";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Gif = styled.img`
  width: 12rem;
  border-radius: 100%;
`;

export default function Building() {
  return (
    <Container>
      <Gif src={gif} />
      <Subtitle>I'm working on it yet!</Subtitle>
    </Container>
  );
}
