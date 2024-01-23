import styled from "styled-components";
import Button from "../Button";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Constants } from "../../utils/constants";

const CircleContainer = styled.div`
  width: 15rem;
  height: 15rem;
  border: 1px solid #2e2e2e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
`;

const PlayContainer = styled.section`
  width: 100%;
  margin-top: 2rem;
`;

export default function Timer() {
  return (
    <Container>
      <CircleContainer>
        <h1>20:00</h1>
      </CircleContainer>
      <PlayContainer>
        <Button color={Constants.PRIMARY_COLOR}>
          <FontAwesomeIcon icon={faPlayCircle} size={Constants.SIZE_2X} />
        </Button>
      </PlayContainer>
    </Container>
  );
}
