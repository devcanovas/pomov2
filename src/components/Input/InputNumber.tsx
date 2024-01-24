import { InputMask, InputMaskChangeEvent } from "primereact/inputmask";
import { useEffect, useState } from "react";
import { ValidationInputConfig } from "../../shared/classes/ValidationInputConfig";
import InputError from "./InputError";

interface InputNumberProps {
  value: string;
  validationConfig: ValidationInputConfig;
}

export function InputNumber(opts: InputNumberProps) {
  const [val, setVal] = useState(opts.value);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log(val);
  }, [val]);

  return (
    <>
      <InputMask
        className="
      bg-zinc-900
      text-xl
      rounded-md
      border-none
      text-center
      text-zinc-400
      p-2"
        {...opts}
        mask={"99 minutes"}
        onChange={(e: InputMaskChangeEvent) => setVal(e.value)}
      />
      {error && <InputError errorMessage={error} />}
    </>
  );
}
