import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export function useStyles(theme: Theme) {
  return StyleSheet.create({
    containerDefault: {
      backgroundColor: theme.colors.background,
      flex: 1,
    },
    contentContainerDefault: {
      flexDirection: "column",
      gap: theme.sizing.gap.large,
      padding: theme.sizing.padding.large,
    },
    imageDefault: {
      width: "100%",
      height: 200,
      borderRadius: theme.sizing.borderRadius.large,
    },
    titleDefault: {
      color: theme.colors.text,
      fontSize: theme.fontSizes.xLarge,
      fontWeight: "bold",
    },
    descriptionDefault: {
      color: theme.colors.text,
      fontSize: theme.fontSizes.medium,
    },
    contentDefault: {
      color: theme.colors.text,
      fontSize: theme.fontSizes.medium,
    },
    footerDefault: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    publishedAtContainerDefault: {
      flexDirection: "row",
      gap: theme.sizing.gap.small,
    },
    publishedAtDefault: {
      fontSize: theme.fontSizes.medium,
      color: theme.colors.primary,
    },
    sourceNameDefault: {
      fontSize: theme.fontSizes.medium,
    },
  });
}
