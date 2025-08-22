import { useTheme } from "@/theme";
import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native";
import { ReactElement, Ref } from "react";
import { news } from "../features";
import { navigationRef, RootStack } from "./Navigator.consts";
import { linking } from "./linking";

export function Navigator(): ReactElement {
  const theme = useTheme();

  return (
    <NavigationContainer fallback={null} linking={linking} ref={navigationRef as Ref<NavigationContainerRef<any>>}>
      <RootStack.Navigator
        initialRouteName="List"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerTitleStyle: {
            color: theme.colors.primary,
            fontWeight: "bold",
          },
          headerTintColor: theme.colors.link,
        }}
      >
        <RootStack.Group>
          <RootStack.Screen
            name="Detail"
            component={news.screens.Detail}
            options={{
              headerShown: true,
              title: "Detail",
              headerBackTitle: "Back to news",
            }}
          />
          <RootStack.Screen
            name="List"
            component={news.screens.List}
            options={{
              headerShown: true,
              title: "News",
            }}
          />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
