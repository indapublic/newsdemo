import { ReactElement } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryProvider, Theme } from "./app/containers";
import { Navigator } from "./app/navigator";

/**
 * App component
 *
 * @returns {ReactElement}
 */
export function App(): ReactElement {
  return (
    <SafeAreaProvider>
      <QueryProvider>
        <Theme.Provider>
          <Theme.Consumer>
            <Navigator />
          </Theme.Consumer>
        </Theme.Provider>
      </QueryProvider>
    </SafeAreaProvider>
  );
}
