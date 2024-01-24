import { FieldConfig } from "./FieldConfig";

export class FormConfig {
  fields: FieldConfig[];
  constructor(fields: FieldConfig[]) {
    this.fields = fields;
  }
}
