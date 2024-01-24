import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TextErrorProps {
  errorMessage: string | undefined;
}

export default function InputError({ errorMessage }: TextErrorProps) {
  return (
    <span className="text-xs w-full flex text-rose-500 p-1 gap-1">
      <div>
        <FontAwesomeIcon icon={faXmarkCircle} />
      </div>
      <div>
        <p>{errorMessage}</p>
      </div>
    </span>
  );
}
