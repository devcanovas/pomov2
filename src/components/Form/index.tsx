import { faSave } from "@fortawesome/free-regular-svg-icons";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { saveSettings, selectPomodoro } from "../../redux/settingsSlice";
import { Settings } from "../../shared/classes/Settings";
import { Constants } from "../../utils/constants";
import { Button } from "../Button";
import { Input } from "../Input";
import Alert from "@mui/material/Alert";
import { useState } from "react";

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
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const pomodoro = useSelector(selectPomodoro);

  const [success, setSuccess] = useState(false);
  const onSubmit = (data: any) => {
    dispatch(saveSettings(new Settings(data.focus, data.long, data.short)));
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false)
    }, 3000)
  };

  const onReset = () => {
    setValue("focus", pomodoro.time_to_focus);
    setValue("long", pomodoro.time_to_rest_long);
    setValue("short", pomodoro.time_to_rest_short);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
      {success && (
        <Alert variant="outlined" severity="success">
          <p className="text-zinc-500">
            Success! Your settings was saved successfully
          </p>
        </Alert>
      )}
      {/* INPUTS */}
      <Input.Root>
        <Input.Label label="Minutes to focus:" />
        <input
          defaultValue={pomodoro.time_to_focus}
          className={classNames}
          {...register("focus")}
        />
        {errors.focus && (
          <Input.Error
            errorMessage={errors.focus?.message?.replace(
              getErrorFieldNaNDefaultMessage(
                "focus",
                watch("focus").toString()
              ),
              Constants.DEFAULT_NAN_MESSAGE
            )}
          />
        )}
      </Input.Root>
      <Input.Root>
        <Input.Label label="Minutes to long rest:" />
        <input
          defaultValue={pomodoro.time_to_rest_long}
          className={classNames}
          {...register("long")}
        />
        {errors.long && (
          <Input.Error
            errorMessage={errors.long?.message?.replace(
              getErrorFieldNaNDefaultMessage("long", watch("long").toString()),
              Constants.DEFAULT_NAN_MESSAGE
            )}
          />
        )}
      </Input.Root>
      <Input.Root>
        <Input.Label label="Minutes to short rest:" />
        <input
          defaultValue={pomodoro.time_to_rest_short}
          className={classNames}
          {...register("short")}
        />
        {errors.short && (
          <Input.Error
            errorMessage={errors.short?.message?.replace(
              getErrorFieldNaNDefaultMessage(
                "short",
                watch("short").toString()
              ),
              Constants.DEFAULT_NAN_MESSAGE
            )}
          />
        )}
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

  function getErrorFieldNaNDefaultMessage(
    field: string,
    valueInput: string
  ): string {
    return (
      field +
      ' must be a `number` type, but the final value was: `NaN` (cast from the value `"' +
      valueInput +
      '"`).'
    );
  }
}
