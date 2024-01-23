import styled from "styled-components";
import Title from "../../components/Title";
import InputNumber from "../../components/Input";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Constants } from "../../utils/constants";
import { faSave } from "@fortawesome/free-regular-svg-icons";
import Menu from "../../components/Menu";
import { OptionMenu } from "../../shared/classes/OptionMenu";
import { v4 as uuidv4 } from "uuid";
import {
  faArrowCircleLeft,
  faArrowRotateRight,
} from "@fortawesome/free-solid-svg-icons";

const FormContainer = styled.form`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ContainerButtons = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const options = [new OptionMenu(uuidv4(), "Back", "/", faArrowCircleLeft)];

export default function SettingsPage() {
  return (
    <>
      <FormContainer>
        <Title>SETTINGS</Title>
        <InputNumber
          label="Minutes for focus"
          placeholder="Set up how much minutes do you want to focus"
          value="20"
        />
        <InputNumber
          label="Minutes for focus"
          placeholder="Set up how much minutes do you want to focus"
          value="20"
        />
        <InputNumber
          label="Minutes for focus"
          placeholder="Set up how much minutes do you want to focus"
          value="20"
        />
        <ContainerButtons>
          <Button color="#2e2e2e">
            <FontAwesomeIcon
              icon={faArrowRotateRight}
              style={{ marginRight: "0.5rem" }}
            />
            Reset settings
          </Button>
          <Button color={Constants.SECONDARY_COLOR}>
            <FontAwesomeIcon icon={faSave} style={{ marginRight: "0.5rem" }} />
            Save
          </Button>
        </ContainerButtons>
      </FormContainer>
      <Menu options={options} />
    </>
  );
}
