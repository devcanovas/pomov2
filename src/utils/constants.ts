import { SizeProp } from "@fortawesome/fontawesome-svg-core";

export class Constants {
  public static readonly PATH_TO_HOME: string = "/";
  public static readonly POMO_TITLE: string = "POMO";
  public static readonly NONE: string = "none";
  public static readonly WIDTH_100: string = "100%";
  public static readonly PRIMARY_COLOR: string = "#b17ad8";
  public static readonly SECONDARY_COLOR: string = "#81e6d9";
  public static readonly SIZE_2X: SizeProp = "2x";
  public static readonly SIZE_1X: SizeProp = "1x";
  public static readonly UNSELECTED_COLOR: string = "#585858";
  public static readonly GRAY_COLOR: string = "gray";
  public static readonly SETTINGS_LABEL: string = "Settings";
  public static readonly SETTINGS_PATH: string = "/settings";
  public static readonly PROFILE_PATH: string = "/profile";
  public static readonly PROFILE_LABLE: string = "Profile";
  public static readonly PROGRAMMING_REPRESENTS_LOGO: string = "</>";
  public static readonly BACK_LABEL = "Back";
  public static readonly SHORT_NAN_ERROR_MESSAGE = 'short must be a `number` type, but the final value was: `NaN` (cast from the value `""`).';
  public static readonly FOCUS_NAN_ERROR_MESSAGE = 'focus must be a `number` type, but the final value was: `NaN` (cast from the value `""`).';
  public static readonly LONG_NAN_ERROR_MESSAGE = 'long must be a `number` type, but the final value was: `NaN` (cast from the value `""`).';
  public static readonly DEFAULT_NAN_MESSAGE = "The field must to be informed with by numbers";
}
