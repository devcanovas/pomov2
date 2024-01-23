import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Constants } from "../../utils/constants";
import { Button } from "../Button";

export default function Timer() {
  return (
    <div className="flex justify-center items-center flex-col w-full mt-8">
      <div className="w-60 h-60 border-zinc-600 border rounded-full flex items-center justify-center">
        <h1 className="text-6xl font-light">20:00</h1>
      </div>
        <div className="mt-4">
        <Button.Primary>
          <FontAwesomeIcon icon={faPlayCircle} size={Constants.SIZE_2X} />
        </Button.Primary>
        </div>
    </div>
  );
}
