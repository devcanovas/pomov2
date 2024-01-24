import { InputMask, InputMaskChangeEvent } from "primereact/inputmask";
import { BaseSyntheticEvent, SetStateAction, useEffect, useState } from "react";
import InputError from "./InputError";

interface InputNumberProps {
  value: string;
  errorMessage?: string;
  onChange: (e: InputMaskChangeEvent) => void
}

export function InputNumber(opts: InputNumberProps) {
  const [val, setVal] = useState(opts.value);

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
        mask={"99"}
      />
      {
        opts.errorMessage && (
          <InputError errorMessage={opts.errorMessage}/>
        )
      }
    </>
  );
}
