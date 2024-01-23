import {
  faCheckCircle,
  faEdit,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";
import Menu from "../../components/Menu";
import Timer from "../../components/Timer";
import Title from "../../components/Title";
import { OptionMenu } from "../../shared/classes/OptionMenu";
import { Constants } from "../../utils/constants";
import { Button } from "../../components/Button";

const options = [
  new OptionMenu(
    uuidv4(),
    Constants.PROFILE_LABLE,
    Constants.PROFILE_PATH,
    faUser
  ),
  new OptionMenu(
    uuidv4(),
    Constants.SETTINGS_LABEL,
    Constants.SETTINGS_PATH,
    faEdit
  ),
];

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center flex-col py-8 px-4">
        <Title>{Constants.POMO_TITLE}</Title>
        <Timer />
        <div className="flex mt-[2rem] justify-between w-full">
          <Button.Secondary>
            <FontAwesomeIcon
              icon={faCheckCircle}
            />
            Longest rest:
            <span style={{ color: `${Constants.GRAY_COLOR}` }}>15min</span>
          </Button.Secondary>
          <Button.Secondary>
            Shortest rest:
            <span style={{ color: `${Constants.GRAY_COLOR}` }}>15min</span>
          </Button.Secondary>
        </div>
      </div>
      <Menu options={options} />
    </>
  );
}
