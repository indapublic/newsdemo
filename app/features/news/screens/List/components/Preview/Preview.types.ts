import { ArticleData } from "@/api/types";
import { TouchableOpacityProps } from "react-native";

export type PreviewProps = Omit<TouchableOpacityProps, "onPress"> & {
  item: ArticleData;
  onPress: (item: ArticleData) => void;
};
