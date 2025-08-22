import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export function useStyles(theme: Theme) {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: theme.sizing.padding.large,
    },
    text: {
      color: theme.colors.text,
      fontSize: theme.fontSizes.medium,
      fontWeight: "bold",
      textAlign: "center",
    },
  });
}
