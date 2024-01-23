import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../components/Button";
import Subtitle from "../../components/Subtitle";
import { Constants } from "../../utils/constants";
import gif from "/images/giphy.gif";

export default function Building() {
  return (
    <div className="flex items-center justify-center flex-col p-8 mt-12">
      <img src={gif} className="w-48 rounded-full" />
      <Subtitle>I'm working on it yet!</Subtitle>
      <p className="font-bold text-2xl">
        {Constants.PROGRAMMING_REPRESENTS_LOGO}
      </p>
      <Subtitle>Wait for the next update, i'll publish it in the next patch as soon as possible!</Subtitle>
      <section className="my-4">
      <p className="font-bold text-xl">Thank you!!!👋🏻</p>
      </section>
      <div className="mt-9">
        <Button.Link toPath={Constants.PATH_TO_HOME}>
          <Button.Secondary>
            <Button.Icon icon={faArrowCircleLeft} />
            <Button.Text text="Back" />
          </Button.Secondary>
        </Button.Link>
      </div>
    </div>
  );
}
