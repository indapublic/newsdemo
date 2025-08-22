import { sdk } from "@/api";
import { config } from "@/config";
import { useBoolean } from "@/hooks";
import { useTheme } from "@/theme";
import { ReactElement, useCallback, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useStyles } from "./Settings.styles";

export function Settings(): ReactElement {
  const theme = useTheme();
  const styles = useStyles(theme);
  const opened = useBoolean(false);
  const [apiKey, setApiKey] = useState(config.newsApiKey);

  const handleOpenSettings = useCallback(() => {
    opened.setTrue();
  }, [opened]);

  const handleSubmit = useCallback(() => {
    opened.setFalse();
    sdk.setApiKey(apiKey);
  }, [opened, apiKey]);

  if (opened.isTrue) {
    return (
      <View style={styles.popupContainer}>
        <View style={styles.popup}>
          <TextInput
            placeholder="4bdcad7f0c564a1f94abfe53c086b196"
            value={apiKey}
            onChangeText={setApiKey}
            style={styles.input}
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {opened.isTrue && (
        <View style={styles.popupContainer}>
          <View style={styles.popup}>
            <Text>Popup</Text>
          </View>
        </View>
      )}
      {opened.isFalse && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleOpenSettings}>
            <Text style={styles.buttonText}>Settings</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
