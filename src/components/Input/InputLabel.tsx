import Subtitle from "../Subtitle";

interface InputLabelProps {
  label: string;
}

export function InputLabel({ label }: InputLabelProps) {
  return <Subtitle>{label}</Subtitle>;
}
