import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type ErrorViewProps = {
  errors: string[];
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  onRetry?: () => void;
};
