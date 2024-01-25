import { useState } from "react";
import { Button } from "../Button";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { Settings } from "../../shared/classes/Settings";
import { Constants } from "../../utils/constants";

interface SelectRestTimerProps {
    settings: Settings
}

export default function SelectRestTimer({ settings }: SelectRestTimerProps) {
    const [isLongSelected, setLongSelected] = useState(false);
    const [isShortSelected, setShortSelected] = useState(false);
  return (
    <div className="flex mt-8 justify-between w-full gap-2">
      <Button.SelectableSecondary
        isSelected={isLongSelected}
        onClick={() => {
          if (isShortSelected) {
            setShortSelected(false);
          }
          return setLongSelected(!isLongSelected);
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
          if (isLongSelected) {
            setLongSelected(false);
          }
          return setShortSelected(!isShortSelected);
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
