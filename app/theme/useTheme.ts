import { useContext } from "react";
import { ThemeContext } from "./context";
import { Theme } from "./types";

export function useTheme(): Theme {
  const { theme } = useContext(ThemeContext);

  return theme;
}
