import { InputMask } from "primereact/inputmask";

interface InputNumberProps {
  value?: string;
  minValue?: number;
  maxValue?: number;
}

export function InputNumber({ value, minValue, maxValue }: InputNumberProps) {
  return (
    <InputMask
      className="bg-transparent border-none text-white text-center text-[14px]"
      value={value}
      onChange={(e) => console.log(e.target.value)}
      mask="99-999999"
      placeholder="99-999999"
    />
  );
}
