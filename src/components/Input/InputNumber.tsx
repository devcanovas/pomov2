import { InputMask } from "primereact/inputmask";

interface InputNumberProps {
  value?: string;
  onChange: () => void;
}

export function InputNumber({ value, onChange }: InputNumberProps) {
  return (
    <InputMask
      className="
      bg-zinc-900
      text-xl
      rounded-md
      border-none
      text-center
      text-zinc-400
      p-2"
      value={value}
      onChange={onChange}
      mask="99 minutes"
      placeholder="60"
    />
  );
}
