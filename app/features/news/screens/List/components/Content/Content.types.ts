import { ArticleData, Articles } from "@/api/types";
import { StyleProp, ViewStyle } from "react-native";

export type ContentProps = {
  articles?: Articles;
  error?: Error | null;
  isLoading: boolean;
  style?: StyleProp<ViewStyle>;
  onEndReached: () => void;
  onItemPress: (item: ArticleData) => void;
  onRefresh: () => void;
};
