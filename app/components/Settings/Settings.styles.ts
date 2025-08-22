import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export function useStyles(theme: Theme) {
  return StyleSheet.create({
    container: {},
    buttonContainer: {
      position: "absolute",
      right: theme.sizing.padding.xLarge * 2,
      bottom: theme.sizing.padding.xLarge * 2,
    },
    popupContainer: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1000,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: theme.sizing.padding.xLarge * 2,
    },
    popup: {
      backgroundColor: "white",
      borderRadius: theme.sizing.borderRadius.large,
      padding: theme.sizing.padding.xLarge,
      width: "100%",
      flexDirection: "column",
      gap: theme.sizing.padding.medium,
    },
    input: {
      borderColor: theme.colors.text,
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: theme.sizing.borderRadius.large,
      padding: theme.sizing.padding.large,
    },
    button: {
      backgroundColor: theme.colors.primary,
      borderRadius: theme.sizing.borderRadius.large,
      padding: theme.sizing.padding.large,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonText: {
      color: theme.colors.background,
      fontSize: theme.fontSizes.medium,
    },
  });
}
