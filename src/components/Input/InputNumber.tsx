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
      border-none text-white text-center text-[14px]"
      value={value}
      onChange={onChange}
      mask="99"
      placeholder="60"
    />
  );
}
