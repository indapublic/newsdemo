import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export function useStyles(theme: Theme) {
  return StyleSheet.create({
    container: {},
    contentContainer: {
      flex: 1,
      justifyContent: "center",
    },
    category: {
      paddingHorizontal: theme.sizing.padding.large,
      paddingVertical: theme.sizing.padding.medium,
    },
    categoryText: {
      fontSize: theme.fontSizes.medium,
      fontWeight: "bold",
    },
  });
}
