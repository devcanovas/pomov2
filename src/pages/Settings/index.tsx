import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { v4 } from "uuid";
import Form from "../../components/Form";
import Menu from "../../components/Menu";
import Title from "../../components/Title";
import { OptionMenu } from "../../shared/classes/OptionMenu";
import { Constants } from "../../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function SettingsPage() {
  return (
    <div className="py-8 px-4">
      <div className="flex items-center justify-center gap-4 w-full">
          <FontAwesomeIcon icon={faGear} size="2x"/>
          <Title>SETTINGS</Title>
        </div>
      <div className="pt-8">
        <Form />
      </div>
      <Menu
        options={[
          new OptionMenu(
            v4(),
            Constants.BACK_LABEL,
            Constants.PATH_TO_HOME,
            faArrowAltCircleLeft
          ),
        ]}
      />
    </div>
  );
}
