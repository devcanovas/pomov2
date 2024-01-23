import styled from "styled-components";
import Button from "../Button";
import { Constants } from "../../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const H2Styled = styled.h2`
  font-family: "GeistUltraLight";
  font-weight: 200;
  color: #6a6a6a;
`;

const Container = styled.div`
  text-align: center;
  padding: 1rem;
`;

interface SubtitleProps {
  children: string;
}

export default function Subtitle({ children }: SubtitleProps) {
  return (
    <Container>
      <H2Styled>{children}</H2Styled>
      <p>{"</>"}</p>
      <H2Styled>Wait for the next update, i'll publish it ASAP</H2Styled>
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
