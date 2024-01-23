import Title from "../../components/Title";
import { Input } from "../../components/Input";
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
import { useState } from "react";

const options = [new OptionMenu(uuidv4(), "Back", "/", faArrowCircleLeft)];

export default function SettingsPage() {
  const [errors, setErrors] = useState([]);
  return (
    <>
      <form className="flex items-center justify-center flex-col">
        <Title>SETTINGS</Title>
        <Input.Root>
          <Input.Label label="Minutes to focus" />
          <Input.Number value="20" />
          {errors && <Input.Error errorMessage="Erro message"></Input.Error>}
        </Input.Root>
        <div className="w-full flex justify-between">
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
        </div>
      </form>
      <Menu options={options} />
    </>
  );
}
