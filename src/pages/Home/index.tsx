import { faEdit, faUser } from "@fortawesome/free-regular-svg-icons";
import { v4 as uuidv4 } from "uuid";
import Menu from "../../components/Menu";
import Timer from "../../components/Timer";
import Title from "../../components/Title";
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
  Notification;
  return (
    <>
      <div className="flex items-center justify-center flex-col py-8 px-4">
        <div className="flex items-center justify-center gap-4 w-full">
          <img src="/images/logo-pomo.png" className="w-10" />
          <Title>{Constants.POMO_TITLE}</Title>
        </div>
        <Timer />
      </div>
      <Menu options={options} />
    </>
  );
}
