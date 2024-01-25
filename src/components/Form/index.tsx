import { faSave } from "@fortawesome/free-regular-svg-icons";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Button } from "../Button";
import { Input } from "../Input";
import { useDispatch, useSelector } from "react-redux";
import { saveSettings, selectSettings } from "../../redux/settingsSlice";
import { Settings } from "../../shared/classes/Settings";

const classNames =
  "bg-zinc-900 text-xl rounded-md border-none text-center text-zinc-400 p-2";

const schema = yup
  .object({
    focus: yup.number().positive().integer().min(10).max(60).required(),
    long: yup.number().positive().integer().min(10).max(60).required(),
    short: yup.number().positive().integer().min(10).max(60).required(),
  })
  .required();

export default function Form() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const settings = useSelector(selectSettings);

  const onSubmit = (data: any) => {
    dispatch(saveSettings(new Settings(data.focus, data.long, data.short)));
  };

  const onReset = () => {
    setValue("focus", settings.time_to_focus);
    setValue("long", settings.time_to_rest_long);
    setValue("short", settings.time_to_rest_short);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
      {/* INPUTS */}
      <Input.Root>
        <Input.Label label="Minutes to focus:" />
        <input
          defaultValue={settings.time_to_focus}
          className={classNames}
          {...register("focus")}
        />
        {errors.focus && <Input.Error errorMessage={errors.focus?.message} />}
      </Input.Root>
      <Input.Root>
        <Input.Label label="Minutes to long rest:" />
        <input
          defaultValue={settings.time_to_rest_long}
          className={classNames}
          {...register("long")}
        />
        {errors.long && <Input.Error errorMessage={errors.long?.message} />}
      </Input.Root>
      <Input.Root>
        <Input.Label label="Minutes to short rest:" />
        <input
          defaultValue={settings.time_to_rest_short}
          className={classNames}
          {...register("short")}
        />
        {errors.short && <Input.Error errorMessage={errors.short?.message} />}
      </Input.Root>

      <div className="w-full flex justify-between gap-4 pt-10">
        <Button.Neutral type="reset">
          <Button.Icon icon={faArrowRotateLeft} />
          <Button.Text text="Reset" />
        </Button.Neutral>
        <Button.Secondary type="submit">
          <Button.Icon icon={faSave} />
          <Button.Text text="Save" />
        </Button.Secondary>
      </div>
    </form>
  );
}
