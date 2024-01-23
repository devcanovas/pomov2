import { faSave } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowCircleLeft,
  faArrowRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import Menu from "../../components/Menu";
import Title from "../../components/Title";
import { OptionMenu } from "../../shared/classes/OptionMenu";

const options = [new OptionMenu(uuidv4(), "Back", "/", faArrowCircleLeft)];

const fields = [
  {
    id: uuidv4(),
    label: "Minutes to focus:",
    minValue: 20,
    maxValue: 59,
  },
  {
    id: uuidv4(),
    label: "Minutes to long rest:",
    minValue: 10,
    maxValue: 59,
  },
  {
    id: uuidv4(),
    label: "Minutes to short rest:",
    minValue: 5,
    maxValue: 59,
  },
];

export default function SettingsPage() {
  const [errors, setErrors] = useState([]);
  return (
    <div className="py-8 px-4">
      <form className="flex items-center justify-center flex-col">
        <Title>SETTINGS</Title>
        {fields.map((field) => {
          return (
            <Input.Root key={field.id}>
              <Input.Label label={field.label} />
              <Input.Number value="20" onChange={() => {}} />
              {errors && (
                <Input.Error errorMessage="Erro message"></Input.Error>
              )}
            </Input.Root>
          );
        })}
        <div className="w-full flex justify-between">
          <Button.Neutral>
            <Button.Icon icon={faArrowRotateRight} />
            <Button.Text text="Reset" />
          </Button.Neutral>
          <Button.Primary>
            <Button.Icon icon={faSave} />
            <Button.Text text="Save" />
          </Button.Primary>
        </div>
      </form>
      <Menu options={options} />
    </div>
  );
}
