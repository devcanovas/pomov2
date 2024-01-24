import {
  faArrowAltCircleLeft,
  faSave,
} from "@fortawesome/free-regular-svg-icons";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import Menu from "../../components/Menu";
import Title from "../../components/Title";
import { FieldConfig } from "../../shared/classes/FieldConfig";
import { OptionMenu } from "../../shared/classes/OptionMenu";

const options = [new OptionMenu(uuidv4(), "Back", "/", faArrowAltCircleLeft)];

export default function SettingsPage() {
  const [focus, setFocus] = useState<number | undefined | null>(20);
  const [long, setLong] = useState<number | undefined | null>(15);
  const [short, setShort] = useState<number | undefined | null>(10);

  const fields = [
    new FieldConfig("Time to focus:", focus, setFocus, 10, 60),
    new FieldConfig("Time to long rest:", long, setLong, 10, 60),
    new FieldConfig("Time to short rest:", short, setShort, 10, 60),
  ];


  return (
    <div className="py-8 px-4">
      <form
        className="flex items-center justify-center flex-col"
      >
        <Title>SETTINGS</Title>
        {fields.map((field) => {
          return (
            <>
              <Input.Root key={field.id}>
                <Input.Label label={field.label} key={uuidv4()} />
                <Input.Number
                  key={uuidv4()}
                  value={field.value ? field.value.toString() : ""}
                  validationConfig={{}}
                />
              </Input.Root>
            </>
          );
        })}
        <div className="w-full flex justify-between gap-4 mt-6">
          <Button.Neutral>
            <Button.Icon icon={faArrowRotateRight} />
            <Button.Text text="Reset" />
          </Button.Neutral>
          <Button.Secondary>
            <Button.Icon icon={faSave} />
            <Button.Text text="Save" />
          </Button.Secondary>
        </div>
      </form>
      <Menu options={options} />
    </div>
  );
}
