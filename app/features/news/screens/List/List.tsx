import { sdk } from "@/api";
import { ArticleData, Articles } from "@/api/types";
import { Settings } from "@/components";
import { RootStackScreenProps } from "@/navigator/Navigator.types";
import { useTheme } from "@/theme";
import { useInfiniteQuery } from "@tanstack/react-query";
import { ReactElement, useCallback, useMemo } from "react";
import { TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Content, Footer, Tags } from "./components";
import { useSearchParams } from "./hooks";
import { CATEGORIES, QUERY_KEY } from "./List.consts";
import { useStyles } from "./List.styles";

/**
 * News list screen.
 *
 * @returns {ReactElement}
 */
export function List({ navigation }: RootStackScreenProps<"List">): ReactElement {
  const theme = useTheme();
  const styles = useStyles(theme);

  const { category, query, debouncedQuery, updateDebounced, setCategory, setQuery } = useSearchParams();
  const queryParams = useMemo(
    () => ({
      category: category?.value ?? undefined,
      q: debouncedQuery || undefined,
    }),
    [category?.value, debouncedQuery],
  );

  const { data, error, isLoading, isRefetching, isFetchingNextPage, fetchNextPage, hasNextPage, refetch } =
    useInfiniteQuery({
      queryKey: [QUERY_KEY, queryParams],
      queryFn: ({ queryKey, pageParam }) => {
        const [, p] = queryKey as [string, { category?: string; q?: string }];

        return sdk.getNews(p.category, p.q, pageParam);
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        const resultsLoaded = allPages.reduce((sum, p) => sum + p.articles.length, 0);
        if (lastPage.articles.length === 0 || resultsLoaded >= lastPage.totalResults) {
          return undefined;
        }

        return allPages.length + 1;
      },
    });

  const articles = useMemo((): Articles => {
    return data?.pages.flatMap(page => page.articles) ?? [];
  }, [data]);

  const handleEndReached = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) fetchNextPage();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const handleRefresh = useCallback(() => {
    refetch();
  }, [refetch]);

  const handleItemPress = useCallback(
    (item: ArticleData): void => {
      navigation.navigate("Detail", { data: item });
    },
    [navigation],
  );

  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
      <View style={styles.header}>
        <Tags categories={CATEGORIES} selected={category} onPress={setCategory} />
        <TextInput
          clearButtonMode="while-editing"
          placeholder="Search"
          placeholderTextColor={theme.colors.placeholderText}
          returnKeyType="search"
          style={styles.search}
          value={query}
          onChangeText={v => {
            setQuery(v);
            updateDebounced(v);
          }}
        />
      </View>
      <Content
        articles={articles}
        error={error}
        isLoading={isLoading || isRefetching}
        style={styles.content}
        onItemPress={handleItemPress}
        onRefresh={handleRefresh}
        onEndReached={handleEndReached}
      />
      <Footer length={articles.length} />
      <Settings />
    </SafeAreaView>
  );
}
