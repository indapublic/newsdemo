import { useTheme } from "@/theme";
import { ReactElement } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { useStyles } from "./Loader.styles";
import { LoaderProps } from "./Loader.types";

export function Loader({ message }: LoaderProps): ReactElement {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <View style={styles.containerDefault}>
      <ActivityIndicator color={theme.colors.primary} size="small" />
      <Text style={styles.textDefault}>{message}</Text>
    </View>
  );
}
