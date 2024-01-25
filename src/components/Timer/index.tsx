import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Constants } from "../../utils/constants";
import { Button } from "../Button";
import { useSelector } from "react-redux";
import { selectSettings } from "../../redux/settingsSlice";

export default function Timer() {
  const settings = useSelector(selectSettings);
  return (
    <div className="flex justify-center items-center flex-col w-full mt-8">
      <div className="w-60 h-60 border-zinc-600 border rounded-full flex items-center justify-center">
        <h1 className="text-6xl font-light">{settings.time_to_focus}</h1>
      </div>
        <div className="mt-4">
        <Button.Primary>
          <FontAwesomeIcon icon={faPlayCircle} size={Constants.SIZE_2X} />
        </Button.Primary>
        </div>
    </div>
  );
}
