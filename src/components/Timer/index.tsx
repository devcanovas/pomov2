import {
  faPauseCircle,
  faPlayCircle,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { invoke } from "@tauri-apps/api";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectPomodoro } from "../../redux/settingsSlice";
import { Constants } from "../../utils/constants";
import { formatTime } from "../../utils/formatters";
import { Button } from "../Button";
import SelectRestTimer from "../SelectRestTimer";

export default function Timer() {
  const pomodoro = useSelector(selectPomodoro);
  const [seconds, setSeconds] = useState(pomodoro.time_to_focus * 60);
  const [isActive, setIsActive] = useState(false);
  const [restTime, setRestTime] = useState(false);
  useEffect(() => {
    let timer: any = null;
    if (seconds < 0) {
      if (restTime === false) {
        invoke("throw_notification", {
          title: "POMO",
          body: `Hey👋🏻! Congratulations! you fulfilled your time to focus☑ it's time to rest for ${
            pomodoro.wich_is_selected === "long"
              ? pomodoro.time_to_rest_long
              : pomodoro.time_to_rest_short
          }!`,
        });
        timer =
          pomodoro.wich_is_selected === "long"
            ? setSeconds(pomodoro.time_to_rest_long * 60)
            : setSeconds(pomodoro.time_to_rest_short * 60);
        setRestTime(true);
        return;
      }
      if (restTime === true) {
        invoke("throw_notification", {
          title: "POMO",
          body: `Hey👋🏻 ‼ It's time to focus more ${pomodoro.time_to_focus} minutes my friend!`,
        });
        timer = setSeconds(pomodoro.time_to_focus * 60);
        setRestTime(false);
      }
      return;
    }

    timer = setTimer(timer);
    return () => {
      clearInterval(timer);
    };
  }, [seconds, isActive]);

  return (
    <>
      <div className="flex justify-center items-center flex-col w-full mt-8">
        <div className="w-60 h-60 border-zinc-600 border rounded-full flex items-center justify-center">
          <h1 className="text-6xl font-light">{formatTime(seconds)}</h1>
        </div>
        <div className="mt-4 flex flex-col justify-center items-center">
          <Button.Primary onClick={() => setIsActive(!isActive)}>
            {(!isActive && seconds > 0 && (
              <FontAwesomeIcon icon={faPlayCircle} size={Constants.SIZE_2X} />
            )) || (
              <FontAwesomeIcon icon={faPauseCircle} size={Constants.SIZE_2X} />
            )}
          </Button.Primary>
          <Button.Restart
            onClick={() => setSeconds(pomodoro.time_to_focus * 60)}
          />
        </div>
      </div>
      <SelectRestTimer settings={pomodoro} />
    </>
  );

  function setTimer(timer: any) {
    if (isActive) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }
    return timer;
  }
}
