import { useState } from "react";
import { Button } from "../Button";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { Settings } from "../../shared/classes/Settings";
import { Constants } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { selectWichIsSelected, setSelected } from "../../redux/settingsSlice";

interface SelectRestTimerProps {
  settings: Settings;
}

export default function SelectRestTimer({ settings }: SelectRestTimerProps) {
  const dispatch = useDispatch();
  const wichIsSelected = useSelector(selectWichIsSelected);
  const isLongSelected = wichIsSelected === "long" ? true : false;
  const isShortSelected = wichIsSelected === "short" ? true : false;
  return (
    <div className="flex mt-8 justify-between w-full gap-2">
      <Button.SelectableSecondary
        isSelected={isLongSelected}
        onClick={() => {
          return dispatch(setSelected("long"));
        }}
        iconWhenSelected={faCheckCircle}
      >
        Long rest:
        <span style={{ color: `${Constants.GRAY_COLOR}` }}>
          {settings.time_to_rest_long}min
        </span>
      </Button.SelectableSecondary>
      <Button.SelectableSecondary
        isSelected={isShortSelected}
        onClick={() => {
          return dispatch(setSelected("short"));
        }}
        iconWhenSelected={faCheckCircle}
      >
        Short rest:
        <span style={{ color: `${Constants.GRAY_COLOR}` }}>
          {settings.time_to_rest_short}min
        </span>
      </Button.SelectableSecondary>
    </div>
  );
}
