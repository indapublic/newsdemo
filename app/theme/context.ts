import { createContext } from "react";
import { lightTheme } from "./themes";
import { type ThemeContext as TypeThemeContext } from "./types";

export const ThemeContext = createContext<TypeThemeContext>({
  mode: "light",
  theme: lightTheme,
  loadMode: () => {},
  enableLightMode: () => {},
  enableDarkMode: () => {},
  enableAutoMode: () => {},
});
