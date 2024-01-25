import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonRestartProps {
    onClick: () => void;
}

export default function ButtonRestart({onClick}: ButtonRestartProps) {
  return (
    <button
      className="pt-5 gap-2 flex text-zinc-500"
      onClick={onClick}
    >
      <div>
        <FontAwesomeIcon icon={faArrowRotateLeft} size={"1x"} />
      </div>
      <div>
        <span>Restart</span>
      </div>
    </button>
  );
}
