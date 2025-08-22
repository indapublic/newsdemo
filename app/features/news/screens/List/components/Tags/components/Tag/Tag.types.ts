import { Category } from "@/features/news/types";

export type TagProps = {
  category: Category;
  selected?: boolean;
  onPress: (category: Category) => void;
};
