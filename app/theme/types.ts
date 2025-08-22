export type Mode = "light" | "dark" | "auto";
export type Theme = {
  name: "light" | "dark";
  statusBar: {
    backgroundColor: string;
    barStyle: "light-content" | "dark-content";
  };
  colors: {
    primary: string;
    link: string;
    error: string;
    success: string;
    warning: string;
    background: string;
    text: string;
    placeholderText: string;
    subtleText: string;
    divider: string;
  };
  fontSizes: {
    small: number;
    medium: number;
    mediumLarge: number;
    large: number;
    xLarge: number;
  };
  sizing: {
    borderRadius: {
      small: number;
      medium: number;
      large: number;
      xLarge: number;
    };
    padding: {
      small: number;
      medium: number;
      large: number;
      xLarge: number;
    };
    gap: {
      small: number;
      medium: number;
      large: number;
      xLarge: number;
    };
  };
};

export type ThemeContext = {
  mode: Mode;
  theme: Theme;
  loadMode: () => void;
  enableLightMode: () => void;
  enableDarkMode: () => void;
  enableAutoMode: () => void;
};
