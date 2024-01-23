import styled from "styled-components";
import gif from "/images/giphy.gif";
import Subtitle from "../../components/Subtitle";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Constants } from "../../utils/constants";

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
      <p>{"</>"}</p>
      <Subtitle>Wait for the next update, i'll publish it ASAP</Subtitle>
      <p>Thank you!!!👋🏻</p>
      <Link to={Constants.PATH_TO_HOME}>
        <Button color={Constants.SECONDARY_COLOR}>
          <FontAwesomeIcon
            icon={faArrowCircleLeft}
            style={{ marginRight: "0.5rem" }}
          />
          Back to home
        </Button>
      </Link>
    </Container>
  );
}
