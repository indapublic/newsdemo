import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export function useStyles(theme: Theme) {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
    },
    header: {
      backgroundColor: theme.colors.background,
      paddingHorizontal: theme.sizing.padding.large,
      gap: theme.sizing.padding.medium,
      paddingTop: theme.sizing.padding.medium,
    },
    search: {
      borderWidth: 1,
      borderColor: "#E5E5E5",
      borderRadius: 12,
      paddingHorizontal: 12,
      paddingVertical: 10,
      fontSize: 16,
      marginBottom: 8,
    },
    content: {
      paddingHorizontal: theme.sizing.padding.large,
    },
  });
}
