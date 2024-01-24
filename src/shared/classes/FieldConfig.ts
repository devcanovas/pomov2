import { Dispatch, SetStateAction } from "react";
import { v4 } from "uuid";

export class FieldConfig {
  id: string;
  label: string;
  value: number | null | undefined;
  setState: Dispatch<SetStateAction<number | null | undefined>>;
  minValue: number;
  maxValue: number;

  constructor(
    label: string,
    value: number | null | undefined,
    setState: Dispatch<SetStateAction<number | null | undefined>> ,
    minValue: number,
    maxValue: number
  ) {
    this.id = v4();
    this.label = label;
    this.value = value;
    this.setState = setState;
    this.minValue = minValue;
    this.maxValue = maxValue;
  }
}
