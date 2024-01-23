import { faWindowClose, faWindowMinimize } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { appWindow } from "@tauri-apps/api/window";
import ActionButton from "./ActionButton";

export default function Decorations() {
  return (
    <header
      className="h-[30px] bg-transparent flex justify-end fixed top-0 left-0 right-0"
      data-tauri-drag-region
    >
      <ActionButton onClick={() => appWindow.hide()}>
        <FontAwesomeIcon icon={faWindowMinimize} />
      </ActionButton>
      <ActionButton onClick={() => appWindow.close()}>
        <FontAwesomeIcon icon={faWindowClose} />
      </ActionButton>
    </header>
  );
}
