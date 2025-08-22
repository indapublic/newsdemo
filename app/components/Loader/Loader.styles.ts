import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export function useStyles(theme: Theme) {
  return StyleSheet.create({
    containerDefault: {
      alignItems: "center",
      flex: 1,
      gap: 8,
      justifyContent: "center",
    },
    textDefault: {
      color: theme.colors.primary,
    },
  });
}
