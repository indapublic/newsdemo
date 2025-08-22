import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export function useStyles(theme: Theme) {
  return StyleSheet.create({
    containerDefault: {
      padding: theme.sizing.padding.large,
    },
    contentContainerDefault: {
      flexDirection: "row",
      gap: theme.sizing.gap.large,
    },
    imageContainerDefault: {
      width: 100,
      height: 100,
      borderRadius: theme.sizing.borderRadius.large,
      overflow: "hidden",
    },
    imageLoaderDefault: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.primary + "10",
    },
    imageDefault: {
      aspectRatio: 1,
      width: "100%",
      height: "100%",
    },
    textContainerDefault: {
      flex: 1,
      flexDirection: "column",
      gap: theme.sizing.gap.medium,
    },
    textDefault: {
      color: theme.colors.primary,
      fontSize: theme.fontSizes.medium,
      fontWeight: "bold",
    },
    descriptionDefault: {
      color: theme.colors.primary,
      fontSize: theme.fontSizes.small,
    },
  });
}
