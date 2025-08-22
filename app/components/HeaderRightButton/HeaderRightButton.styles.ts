import { Theme } from "@/theme";

export function useStyles(theme: Theme) {
  return {
    openInBrowserButtonDefault: {
      paddingHorizontal: theme.sizing.padding.small,
      paddingVertical: theme.sizing.padding.small,
    },
    openInBrowserButtonTextDefault: {
      color: theme.colors.background,
      fontSize: theme.fontSizes.mediumLarge,
    },
  };
}
