import {
  faPauseCircle,
  faPlayCircle,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Constants } from "../../utils/constants";
import { Button } from "../Button";
import { useSelector } from "react-redux";
import { selectSettings } from "../../redux/settingsSlice";
import { useEffect, useState } from "react";
import { formatTime } from "../../utils/formatters";

export default function Timer() {
  const settings = useSelector(selectSettings);
  const [seconds, setSeconds] = useState(settings.time_to_focus * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer: any = null;
    if (seconds <= 0) {
      return;
    }
    if (isActive) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isActive]);

  return (
    <div className="flex justify-center items-center flex-col w-full mt-8">
      <div className="w-60 h-60 border-zinc-600 border rounded-full flex items-center justify-center">
        <h1 className="text-6xl font-light">{formatTime(seconds)}</h1>
      </div>
      <div className="mt-4">
        <Button.Primary onClick={() => setIsActive(!isActive)}>
          {(!isActive && (
            <FontAwesomeIcon icon={faPlayCircle} size={Constants.SIZE_2X} />
          )) || (
            <FontAwesomeIcon icon={faPauseCircle} size={Constants.SIZE_2X} />
          )}
        </Button.Primary>
      </div>
    </div>
  );
}
