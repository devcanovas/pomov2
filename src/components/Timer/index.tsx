import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Constants } from "../../utils/constants";
import Button from "../Button";





export default function Timer() {
  return (
    <div className="flex content-center justify-center flex-col">
      <div className="w-[15rem] h-[15rem] border-[#2e2e2e] border-[1px] rounded-md flex items-center content-center">
        <h1>20:00</h1>
      </div>
      <section className="w-full mt-8">
        <Button color={Constants.PRIMARY_COLOR}>
          <FontAwesomeIcon icon={faPlayCircle} size={Constants.SIZE_2X} />
        </Button>
      </section>
    </div>
  );
}
