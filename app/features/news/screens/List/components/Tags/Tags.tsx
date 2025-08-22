import { useTheme } from "@/theme";
import { ReactElement } from "react";
import { ScrollView, View } from "react-native";
import { useStyles } from "./Tags.styles";
import { TagsProps } from "./Tags.types";
import { Tag } from "./components";

export function Tags({ categories, selected, onPress }: TagsProps): ReactElement {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer} horizontal style={styles.container}>
        {categories.map(category => (
          <Tag key={category.key} category={category} selected={selected?.value === category.value} onPress={onPress} />
        ))}
      </ScrollView>
    </View>
  );
}
