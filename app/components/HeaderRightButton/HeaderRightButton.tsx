import { useTheme } from "@/theme";
import { openUrl } from "@/utils";
import { ReactElement } from "react";
import { Text, TouchableOpacity } from "react-native";
import { useStyles } from "./HeaderRightButton.styles";
import { HeaderRightButtonProps } from "./HeaderRightButton.types";

export function HeaderRightButton({ url, title }: HeaderRightButtonProps): ReactElement {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <TouchableOpacity
      style={styles.openInBrowserButtonDefault}
      onPress={(): void => {
        openUrl(url, title);
      }}
    >
      <Text style={styles.openInBrowserButtonTextDefault}>Open in browser</Text>
    </TouchableOpacity>
  );
}
