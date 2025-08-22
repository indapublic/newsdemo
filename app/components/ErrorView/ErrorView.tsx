import { useTheme } from "@/theme";
import { ReactElement } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useStyles } from "./ErrorView.styles";
import { ErrorViewProps } from "./ErrorView.types";

/**
 * Error component.
 *
 * @param {ErrorViewProps} param0
 *
 * @returns {ReactElement<ErrorViewProps>}
 */
export function ErrorView({ errors, style, styleText, onRetry }: ErrorViewProps): ReactElement<ErrorViewProps> {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.errorContainer}>
        {errors.map((error, index) => (
          <Text key={index} style={[styles.text, styleText]}>
            {error}
          </Text>
        ))}
      </View>
      {onRetry && (
        <TouchableOpacity style={styles.button} onPress={onRetry}>
          <Text style={styles.buttonText}>Retry</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
