import { Theme } from "./types";

export const lightTheme: Theme = {
  name: "light",
  statusBar: {
    // backgroundColor: "#1A1A1A",
    // barStyle: "light-content",
    backgroundColor: "red",
    barStyle: "light-content",
  },
  colors: {
    primary: "#1A1A1A",
    link: "#0056B3",
    error: "#B00020",
    success: "#146C43",
    warning: "#B58105",
    background: "#FFFFFF",
    text: "#333333",
    placeholderText: "#666666",
    subtleText: "#666666",
    divider: "#E5E5E5",
  },
  fontSizes: {
    small: 12,
    medium: 16,
    mediumLarge: 18,
    large: 20,
    xLarge: 24,
  },
  sizing: {
    borderRadius: {
      small: 4,
      medium: 8,
      large: 16,
      xLarge: 24,
    },
    padding: {
      small: 4,
      medium: 8,
      large: 16,
      xLarge: 24,
    },
    gap: {
      small: 4,
      medium: 8,
      large: 16,
      xLarge: 24,
    },
  },
};

export const darkTheme: Theme = {
  name: "dark",
  statusBar: {
    backgroundColor: "#000000",
    barStyle: "light-content",
  },
  colors: {
    primary: "#FFFFFF",
    link: "#4DA3FF",
    error: "#FF6B6B",
    success: "#4ADE80",
    warning: "#FACC15",
    background: "#121212",
    text: "#E5E5E5",
    placeholderText: "#A1A1A1",
    subtleText: "#A1A1A1",
    divider: "#2D2D2D",
  },
  fontSizes: {
    small: 12,
    medium: 16,
    mediumLarge: 18,
    large: 20,
    xLarge: 24,
  },
  sizing: {
    borderRadius: {
      small: 4,
      medium: 8,
      large: 16,
      xLarge: 24,
    },
    padding: {
      small: 4,
      medium: 8,
      large: 16,
      xLarge: 24,
    },
    gap: {
      small: 4,
      medium: 8,
      large: 16,
      xLarge: 24,
    },
  },
};
