import styled from "styled-components";
import { appWindow } from "@tauri-apps/api/window";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";
import { faWindowMinimize } from "@fortawesome/free-regular-svg-icons";

const Container = styled.header`
  height: 30px;
  background: transparent;
  user-select: none;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const ActionButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  color: white;
  transition: 0.5s;
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
    background-color: #2e2e2e;
  }
`;

export default function Decorations() {
  return (
    <Container data-tauri-drag-region>
      <ActionButton onClick={() => appWindow.hide()}>
        <FontAwesomeIcon icon={faWindowMinimize} />
      </ActionButton>
      <ActionButton onClick={() => appWindow.close()}>
        <FontAwesomeIcon icon={faWindowClose} />
      </ActionButton>
    </Container>
  );
}
