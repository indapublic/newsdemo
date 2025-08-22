import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export function useStyles(theme: Theme) {
  return StyleSheet.create({
    containerDefault: {
      paddingHorizontal: theme.sizing.padding.large,
      paddingVertical: theme.sizing.padding.medium,
    },
    containerSelected: {
      backgroundColor: theme.colors.primary,
      borderRadius: theme.sizing.borderRadius.medium,
    },
    labelDefault: {
      color: theme.colors.text,
      fontSize: theme.fontSizes.medium,
      fontWeight: "bold",
    },
    labelSelected: {
      color: theme.colors.background,
    },
  });
}
