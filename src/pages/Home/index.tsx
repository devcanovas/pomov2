import styled from "styled-components";
import Title from "../../components/Title";
import { Constants } from "../../utils/constants";
import Menu from "../../components/Menu";
import { OptionMenu } from "../../shared/classes/OptionMenu";
import {
  faCheckCircle,
  faEdit,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { v4 as uuidv4 } from "uuid";
import Timer from "../../components/Timer";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SelectSettingsContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2rem;
  justify-content: space-between;
`;

const options = [
  new OptionMenu(uuidv4(), "My Profile", "/profile", faUser),
  new OptionMenu(
    uuidv4(),
    Constants.SETTINGS_LABEL,
    Constants.SETTINGS_PATH,
    faEdit,
  ),
];

export default function Home() {
  return (
    <>
      <Container>
        <Title>{Constants.POMO_TITLE}</Title>
        <Timer />
        <SelectSettingsContainer>
          <Button color={Constants.SECONDARY_COLOR}>
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{ marginRight: ".2rem" }}
            />
            Longest rest:
            <span style={{ color: `${Constants.GRAY_COLOR}` }}>15min</span>
          </Button>
          <Button color={Constants.UNSELECTED_COLOR}>
            Shortest rest:
            <span style={{ color: `${Constants.GRAY_COLOR}` }}>15min</span>
          </Button>
        </SelectSettingsContainer>
      </Container>
      <Menu options={options} />
    </>
  );
}
