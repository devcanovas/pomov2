export class Settings {
  time_to_focus: number;
  time_to_rest_long: number;
  time_to_rest_short: number;
  constructor(time_to_focus: number, time_to_rest_long: number, time_to_rest_short: number) {
    this.time_to_focus = time_to_focus;
    this.time_to_rest_long = time_to_rest_long;
    this.time_to_rest_short = time_to_rest_short;
  }
}
