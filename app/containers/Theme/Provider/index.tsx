import { Mode, readTheme, Theme, ThemeContext, ThemeContextType } from "@/theme";
import { FunctionComponent, PropsWithChildren, ReactElement, useCallback, useEffect, useMemo, useState } from "react";
import { Appearance } from "react-native";

export const Provider: FunctionComponent<PropsWithChildren> = (
  props: PropsWithChildren,
): ReactElement<PropsWithChildren> => {
  const { children } = props;
  const [mode, setMode] = useState<Mode>("auto");
  const [theme, setTheme] = useState<Theme>(readTheme(Appearance.getColorScheme() as Mode));

  useEffect((): (() => void) => {
    switch (mode) {
      case "auto":
        switch (Appearance.getColorScheme()) {
          case "dark":
            setTheme(readTheme("dark"));

            break;
          case "light":
            setTheme(readTheme("light"));

            break;
        }

        break;
      case "dark":
        setTheme(readTheme("dark"));

        break;
      case "light":
        setTheme(readTheme("light"));

        break;
    }

    const onAppearanceChange = (preferences: Appearance.AppearancePreferences): void => {
      switch (mode) {
        case "auto":
          switch (preferences.colorScheme) {
            case "dark":
              setTheme(readTheme("dark"));

              break;
            case "light":
              setTheme(readTheme("light"));

              break;
          }

          break;
      }
    };

    const listener = Appearance.addChangeListener(onAppearanceChange);

    return () => {
      listener.remove();
    };
  }, [mode]);

  const doEnableAutoMode = useCallback((): void => {
    setMode("auto");
  }, []);

  const doEnableDarkMode = useCallback((): void => {
    setMode("dark");
  }, []);

  const doEnableLightMode = useCallback((): void => {
    setMode("light");
  }, []);

  const loadMode = useCallback((): void => {
    setMode("auto");
  }, []);

  const memoizedValue = useMemo(
    (): ThemeContextType => ({
      mode,
      theme,
      enableAutoMode: doEnableAutoMode,
      enableDarkMode: doEnableDarkMode,
      enableLightMode: doEnableLightMode,
      loadMode,
    }),
    [mode, theme, doEnableAutoMode, doEnableDarkMode, doEnableLightMode, loadMode],
  );

  return <ThemeContext.Provider value={memoizedValue}>{children}</ThemeContext.Provider>;
};
