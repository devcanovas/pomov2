import { faSave } from "@fortawesome/free-regular-svg-icons";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Button } from "../Button";
import { Input } from "../Input";

const classNames = "bg-zinc-900 text-xl rounded-md border-none text-center text-zinc-400 p-2";

const schema = yup
  .object({
    focus: yup.number().positive().integer().min(10).max(60).required(),
    long: yup.number().positive().integer().min(10).max(60).required(),
    short: yup.number().positive().integer().min(10).max(60).required(),
  })
  .required();

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* INPUTS */}
      <Input.Root>
        <Input.Label label="Minutes to focus:" />
        <input
        defaultValue={0}
          className={classNames}
          {...register("focus")}
        />
        {errors.focus && <Input.Error errorMessage={errors.focus?.message} />}
      </Input.Root>
      <Input.Root>
        <Input.Label label="Minutes to long rest:" />
        <input
        defaultValue={0}
          className={classNames}
          {...register("long")}
        />
        {errors.long && <Input.Error errorMessage={errors.long?.message} />}
      </Input.Root>
      <Input.Root>
        <Input.Label label="Minutes to short rest:" />
        <input
        defaultValue={0}
          className={classNames}
          {...register("short")}
        />
        {errors.short && <Input.Error errorMessage={errors.short?.message} />}
      </Input.Root>

      <div className="w-full flex justify-between gap-4 pt-10">
        <Button.Neutral>
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
