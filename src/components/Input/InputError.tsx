import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TextErrorProps {
  errorMessage: string | undefined;
}

export default function InputError({ errorMessage }: TextErrorProps) {
  return (
    <div className="text-xs w-full flex items-center justify-center text-primary p-1 gap-1 px-10">
      <div>
        <FontAwesomeIcon icon={faXmarkCircle} />
      </div>
      <div>
        <p>{errorMessage}</p>
      </div>
    </div>
  );
}
