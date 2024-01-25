import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { v4 } from "uuid";
import Form from "../../components/Form";
import Menu from "../../components/Menu";
import Title from "../../components/Title";
import { OptionMenu } from "../../shared/classes/OptionMenu";
import { Constants } from "../../utils/constants";

export default function SettingsPage() {
  return (
    <div className="py-8 px-4">
      <Title>SETTINGS</Title>
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
