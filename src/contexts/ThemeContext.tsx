import React, {FC, createContext, useState} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import type {PropsWithChildren} from 'react';
import type {ColorSchemeName, ColorValue, StatusBarStyle} from 'react-native';

type ThemeOption = 'dark' | 'light' | 'system';

type ThemeContextProps = {
  theme: ColorSchemeName;
  selectedTheme: ThemeOption;
  switchTheme: (newTheme: ThemeOption) => void;
  changeStatusBar: (style: StatusBarStyle, background?: ColorValue) => void;
};

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps,
);

const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeOption>('light');
  const [theme, setTheme] = useState<ColorSchemeName>('light');
  const [statusBarBackground, setStatusBarBackground] =
    useState<ColorValue>('transparent');
  const [statusBarStyle, setStatusBarStyle] =
    useState<StatusBarStyle>('dark-content');

  const colorScheme = useColorScheme();

  const switchTheme = (newTheme: ThemeOption) => {
    setSelectedTheme(newTheme);
    setTheme(newTheme === 'system' ? colorScheme : newTheme);
  };

  const changeStatusBar = (
    style: StatusBarStyle,
    background: ColorValue = 'transparent',
  ) => {
    setStatusBarBackground(background);
    setStatusBarStyle(style);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        selectedTheme,
        switchTheme,
        changeStatusBar,
      }}>
      <StatusBar
        backgroundColor={statusBarBackground}
        barStyle={statusBarStyle}
      />
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
