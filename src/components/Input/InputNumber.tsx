interface InputNumberProps {
  value?: number;
}

export function InputNumber({ value }: InputNumberProps) {
  return (
    <>
      <input
        className="
      bg-zinc-900
      text-xl
      rounded-md
      border-none
      text-center
      text-zinc-400
      p-2"
        type="numeber"
        min="10"
        max="60"
      />
    </>
  );
}
