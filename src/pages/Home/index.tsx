import styled from "styled-components";
import Title from "../../components/Title";
import { Constants } from "../../utils/constants";
import Menu from "../../components/Menu";
import { OptionMenu } from "../../shared/classes/OptionMenu";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { v4 as uuidv4 } from "uuid";

const Container = styled.div`
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const options = [new OptionMenu(uuidv4(), "Settings", "/settings", faEdit)];

export default function Home() {
  return (
    <>
      <Container>
        <Title>{Constants.POMO_TITLE}</Title>
      </Container>
      <Menu options={options} />
    </>
  );
}
