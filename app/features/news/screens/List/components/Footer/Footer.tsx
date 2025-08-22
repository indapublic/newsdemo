import { useTheme } from "@/theme";
import { ReactElement } from "react";
import { Text, View } from "react-native";
import { useStyles } from "./Footer.styles";
import { FooterProps } from "./Footer.types";

export function Footer({ length = 0 }: FooterProps): ReactElement | null {
  const theme = useTheme();
  const styles = useStyles(theme);

  if (!length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Total articles:</Text>
      <Text style={styles.text}>{length}</Text>
    </View>
  );
}
