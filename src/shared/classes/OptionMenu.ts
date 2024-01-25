import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export class OptionMenu {
  id: string;
  label: string;
  to: string;
  icon: IconDefinition;

  constructor(id: string, labe: string, to: string, icon: IconDefinition) {
    this.id = id;
    this.label = labe;
    this.to = to;
    this.icon = icon;
  }
}
