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
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { invoke } from "@tauri-apps/api";

export default function Timer() {
  const settings = useSelector(selectSettings);
  const [seconds, setSeconds] = useState(settings.time_to_focus * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer: any = null;
    if (seconds <= 0) {
      invoke('throw_notification', {
        title: "POMO"
      })
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
  }, [seconds, isActive]);

  return (
    <div className="flex justify-center items-center flex-col w-full mt-8">
      <div className="w-60 h-60 border-zinc-600 border rounded-full flex items-center justify-center">
        <h1 className="text-6xl font-light">{formatTime(seconds)}</h1>
      </div>
      <div className="mt-4 flex flex-col justify-center items-center">
        <Button.Primary onClick={() => setIsActive(!isActive)}>
          {((!isActive && seconds > 0) && (
            <FontAwesomeIcon icon={faPlayCircle} size={Constants.SIZE_2X} />
          )) || (
            <FontAwesomeIcon icon={faPauseCircle} size={Constants.SIZE_2X} />
          )}
        </Button.Primary>
        <button
          className="pt-5 gap-2 flex text-zinc-500"
          onClick={() => setSeconds(settings.time_to_focus * 60)}
        >
          <div>
            <FontAwesomeIcon icon={faArrowRotateLeft} size={"1x"} />
          </div>
          <div>
            <span>Restart</span>
          </div>
        </button>
      </div>
    </div>
  );
}
