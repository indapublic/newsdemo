import { ArticleData } from "@/api/types";
import { ErrorView, Loader } from "@/components";
import { useTheme } from "@/theme";
import { FlashList } from "@shopify/flash-list";
import { ReactElement, useCallback } from "react";
import { RefreshControl, View } from "react-native";
import { Preview } from "../Preview";
import { useStyles } from "./Content.styles";
import { ContentProps } from "./Content.types";

/**
 * News list content.
 *
 * @param {ContentProps} props - The component props.
 * @returns {ReactElement<ContentProps>} The rendered component.
 */
export function Content({
  articles,
  error,
  isLoading,
  style,
  onEndReached,
  onItemPress,
  onRefresh,
}: ContentProps): ReactElement<ContentProps> {
  const theme = useTheme();
  const styles = useStyles(theme);

  const renderItem = useCallback(
    ({ item }: { item: ArticleData }): ReactElement => {
      return <Preview item={item} onPress={onItemPress} />;
    },
    [onItemPress],
  );

  if (isLoading) {
    return (
      <View style={[styles.container, style]}>
        <Loader message="Loading news..." />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, style]}>
        <ErrorView
          errors={["We couldn’t load the latest news.", "Please check your internet connection and try again."]}
          styleText={styles.errorText}
          onRetry={onRefresh}
        />
      </View>
    );
  }

  return (
    <FlashList
      data={articles}
      keyExtractor={(_, itemIndex) => itemIndex.toString()}
      renderItem={renderItem}
      showsVerticalScrollIndicator
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
}
