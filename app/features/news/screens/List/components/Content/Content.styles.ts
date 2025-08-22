import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export function useStyles(theme: Theme) {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    errorText: {
      fontSize: theme.fontSizes.medium,
      fontWeight: "bold",
      textAlign: "center",
    },
    footer: {
      height: 100,
    },
  });
}
