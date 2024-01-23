import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const ErrorMessage = styled.span`
  padding: 0.5rem;
  text-align: left;
  color: #fa5252;
`;

interface TextErrorProps {
  children: string;
}

export default function TextError({ children }: TextErrorProps) {
  return (
    <ErrorMessage>
      <FontAwesomeIcon icon={faXmarkCircle} style={{ marginRight: "0.5rem" }} />
      {children}
    </ErrorMessage>
  );
}
