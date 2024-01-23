import gif from "/images/giphy.gif";
import Subtitle from "../../components/Subtitle";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Constants } from "../../utils/constants";

export default function Building() {
  return (
    <div className="flex items-center justify-center flex-col p-[2rem] mt-[rem]">
      <img src={gif} className="w-[12rem] rounded-full" />
      <Subtitle>I'm working on it yet!</Subtitle>
      <p>{"</>"}</p>
      <Subtitle>Wait for the next update, i'll publish it ASAP</Subtitle>
      <p>Thank you!!!👋🏻</p>
      <Link to={Constants.PATH_TO_HOME}>
        <Button color={Constants.SECONDARY_COLOR}>
          <FontAwesomeIcon
            icon={faArrowCircleLeft}
            style={{ marginRight: "0.5rem" }}
          />
          Back to home
        </Button>
      </Link>
    </div>
  );
}
