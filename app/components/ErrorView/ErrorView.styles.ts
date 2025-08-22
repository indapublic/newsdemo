import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export function useStyles(theme: Theme) {
  return StyleSheet.create({
    container: {
      alignItems: "center",
      flex: 1,
      gap: theme.sizing.gap.large,
      justifyContent: "center",
    },
    errorContainer: {
      gap: theme.sizing.gap.small,
    },
    text: {
      color: theme.colors.error,
      fontSize: theme.fontSizes.medium,
      fontWeight: "bold",
    },
    button: {
      alignItems: "center",
      backgroundColor: theme.colors.primary,
      borderRadius: theme.sizing.borderRadius.large,
      justifyContent: "center",
      padding: theme.sizing.padding.large,
    },
    buttonText: {
      color: "white",
      fontSize: theme.fontSizes.medium,
    },
  });
}
