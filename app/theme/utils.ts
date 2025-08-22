import { darkTheme, lightTheme } from "./themes";
import { Mode, type Theme } from "./types";

/**
 *
 */
export function readTheme(mode: Mode): Theme {
  switch (mode) {
    case "dark":
      return darkTheme;

    case "light":
      return lightTheme;

    default:
      return lightTheme;
  }
}
