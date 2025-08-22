import { HeaderRightButton } from "@/components";
import { darkTheme, lightTheme, useTheme } from "@/theme";
import { useFocusEffect } from "@react-navigation/native";
import { ReactElement, useCallback, useMemo } from "react";
import { Dimensions, Image, ImageSourcePropType, ScrollView, Text, View } from "react-native";
import RenderHtml from "react-native-render-html";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackScreenProps } from "../../../../navigator/Navigator.types";
import { useStyles } from "./Detail.styles";

const navigationOptions = (
  theme: typeof lightTheme | typeof darkTheme,
  title: string,
  url: string | null,
): Partial<{}> => {
  return {
    headerRight: (): ReactElement => <HeaderRightButton title={title} url={url} />,
    headerTitle: "",
    headerTintColor: theme.colors.background,
    headerStyle: {
      backgroundColor: theme.colors.primary,
    },
    headerTitleStyle: {},
    headerBackTitleStyle: {
      fontSize: theme.fontSizes.mediumLarge,
    },
  };
};

/**
 * News detail screen.
 *
 * @returns {ReactElement}
 */
export function Detail({ navigation, route }: RootStackScreenProps<"Detail">): ReactElement {
  const { data } = route.params;
  const theme = useTheme();
  const styles = useStyles(theme);

  useFocusEffect(
    useCallback((): void => {
      navigation.setOptions(navigationOptions(theme, data.title, data.url));
    }, [navigation, data.title, data.url, theme]),
  );

  const imageSource = useMemo((): ImageSourcePropType => {
    if (data.urlToImage) {
      return { uri: data.urlToImage };
    }

    return { uri: "https://placehold.co/150x150/929292/ffffff.png?text=No%20image&font=nunito" };
  }, [data.urlToImage]);

  const publishedAt = useMemo((): Date => {
    return new Date(data.publishedAt);
  }, [data.publishedAt]);

  return (
    <SafeAreaView edges={["bottom"]} style={styles.containerDefault}>
      <ScrollView
        contentContainerStyle={styles.contentContainerDefault}
        horizontal={false}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.titleDefault}>{data.title}</Text>
        <Image source={imageSource} style={styles.imageDefault} />
        {data.description && <Text style={styles.descriptionDefault}>{data.description}</Text>}
        {data.content && (
          <RenderHtml
            baseStyle={styles.contentDefault}
            contentWidth={Dimensions.get("window").width}
            source={{ html: data.content }}
          />
        )}
        <View style={styles.footerDefault}>
          <View style={styles.publishedAtContainerDefault}>
            <Text style={styles.publishedAtDefault}>
              {publishedAt.toLocaleDateString()} at {publishedAt.toLocaleTimeString()}
            </Text>
          </View>
          <Text style={styles.sourceNameDefault}>{data.source.name}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
