interface ButtonTextProps {
  text: string;
}

export function ButtonText({ text }: ButtonTextProps) {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}
