import { Category } from "@/features/news/types";

export type TagsProps = {
  categories: Category[];
  selected?: Category;
  onPress: (category: Category) => void;
};
