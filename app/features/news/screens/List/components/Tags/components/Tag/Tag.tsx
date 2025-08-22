import { useTheme } from "@/theme";
import { ReactElement, useCallback } from "react";
import { Text, TouchableOpacity } from "react-native";
import { useStyles } from "./Tag.styles";
import { TagProps } from "./Tag.types";

export function Tag({ category, selected = false, onPress }: TagProps): ReactElement {
  const theme = useTheme();
  const styles = useStyles(theme);

  const handlePress = useCallback(() => {
    onPress(category);
  }, [category, onPress]);

  return (
    <TouchableOpacity
      disabled={selected}
      style={[styles.containerDefault, selected && styles.containerSelected]}
      onPress={handlePress}
    >
      <Text style={[styles.labelDefault, selected && styles.labelSelected]}>{category.label}</Text>
    </TouchableOpacity>
  );
}
