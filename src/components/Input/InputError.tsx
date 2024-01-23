import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TextErrorProps {
  errorMessage: string;
}

export default function InputError({ errorMessage }: TextErrorProps) {
  return (
    <span className="text-left text-[12px] text-[#fa5252] gap-1">
      <FontAwesomeIcon icon={faXmarkCircle} />
      {errorMessage}
    </span>
  );
}
