import { Dispatch, SetStateAction } from "react";
import { v4 } from "uuid";
import { ErrorConfig } from "./ErrorConfig";

export class FieldConfig {
  id: string;
  label: string;
  value: number;
  setState: Dispatch<SetStateAction<number>>;
  minValue: number;
  maxValue: number;
  errors: ErrorConfig[];

  constructor(
    label: string,
    value: number,
    setState: Dispatch<SetStateAction<number>>,
    minValue: number,
    maxValue: number,
    errors: ErrorConfig[]
  ) {
    this.id = v4();
    this.label = label;
    this.value = value;
    this.setState = setState;
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.errors = errors;
  }
}
