import { useBoolean } from "@/hooks";
import { useTheme } from "@/theme";
import { openUrl } from "@/utils";
import Clipboard from "@react-native-clipboard/clipboard";
import { memo, ReactElement, useCallback, useMemo } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  ImageSourcePropType,
  NativeSyntheticEvent,
  Share,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ContextMenu, { ContextMenuOnPressNativeEvent } from "react-native-context-menu-view";
import { useStyles } from "./Preview.styles";
import { PreviewProps } from "./Preview.types";

/**
 * News preview component.
 *
 * @param {PreviewProps} param0
 *
 * @returns {ReactElement<PreviewProps>}
 */
function PreviewPure({ item, style, onPress, ...restProps }: PreviewProps): ReactElement<PreviewProps> {
  const theme = useTheme();
  const styles = useStyles(theme);
  const imageLoaded = useBoolean(false);

  /**
   * Handle press.
   *
   * @returns {void}
   */
  const handlePress = useCallback(() => {
    onPress?.(item);
  }, [onPress, item]);

  /**
   * Handle action press.
   *
   * @param {NativeSyntheticEvent<ContextMenuOnPressNativeEvent>} event
   *
   * @returns {void}
   */
  const handleActionPress = useCallback(
    (event: NativeSyntheticEvent<ContextMenuOnPressNativeEvent>) => {
      switch (event.nativeEvent.index) {
        case 0:
          openUrl(item.url, item.title);

          break;

        case 1:
          if (!item.url) {
            return;
          }

          Clipboard.setString(item.url);

          break;

        case 2:
          if (!item.url) {
            return;
          }

          Share.share({
            url: item.url,
            title: item.title,
          });

          break;

        case 3:
        case 4:
          Alert.alert("Coming soon");

          break;
      }
    },
    [item.title, item.url],
  );

  const imageSource = useMemo((): ImageSourcePropType => {
    if (item.urlToImage) {
      return { uri: item.urlToImage };
    }

    return { uri: "https://placehold.co/100x100/929292/ffffff.png?text=No%20image&font=nunito" };
  }, [item.urlToImage]);

  return (
    <ContextMenu
      actions={[
        { title: "Open in browser" },
        { title: "Copy link" },
        { title: "Share" },
        { title: "Save to read later", disabled: true },
        { title: "Save to favorites", disabled: true },
      ]}
      onPress={handleActionPress}
    >
      <TouchableOpacity style={[styles.containerDefault, style]} onPress={handlePress} {...restProps}>
        <View style={styles.contentContainerDefault}>
          <View style={styles.imageContainerDefault}>
            {imageLoaded.isFalse && (
              <View style={styles.imageLoaderDefault}>
                <ActivityIndicator color={theme.colors.primary} size="small" />
              </View>
            )}
            <Image
              progressiveRenderingEnabled
              source={imageSource}
              style={styles.imageDefault}
              onLoadEnd={imageLoaded.setTrue}
              onLoadStart={imageLoaded.setFalse}
            />
          </View>
          <View style={styles.textContainerDefault}>
            <Text style={styles.textDefault}>{item.title}</Text>
            <Text style={styles.descriptionDefault}>{item.description}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </ContextMenu>
  );
}

export const Preview = memo(PreviewPure, (prevProps, nextProps) => {
  return prevProps.item.title === nextProps.item.title;
});
