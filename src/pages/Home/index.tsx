import {
  faCheckCircle,
  faEdit,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../../components/Button";
import Menu from "../../components/Menu";
import Timer from "../../components/Timer";
import Title from "../../components/Title";
import { selectSettings } from "../../redux/settingsSlice";
import { OptionMenu } from "../../shared/classes/OptionMenu";
import { Constants } from "../../utils/constants";

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
  const settings = useSelector(selectSettings);
  return (
    <>
      <div className="flex items-center justify-center flex-col py-8 px-4">
        <div className="flex items-center justify-center gap-4 w-full">
            <img src="/images/logo-pomo.png" className="w-10" />
            <Title>{Constants.POMO_TITLE}</Title>
        </div>
        <Timer />
        <div className="flex mt-8 justify-between w-full gap-2">
          <Button.SelectableSecondary iconWhenSelected={faCheckCircle}>
            Long rest:
            <span style={{ color: `${Constants.GRAY_COLOR}` }}>
              {settings.time_to_rest_long}min
            </span>
          </Button.SelectableSecondary>
          <Button.SelectableSecondary iconWhenSelected={faCheckCircle}>
            Short rest:
            <span style={{ color: `${Constants.GRAY_COLOR}` }}>
              {settings.time_to_rest_short}min
            </span>
          </Button.SelectableSecondary>
        </div>
      </div>
      <Menu options={options} />
    </>
  );
}
