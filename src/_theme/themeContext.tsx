'use client';

import { createContext } from 'react';
import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import { DarkTheme } from './darkTheme';
import { LightTheme } from './lightTheme';
import { useLocalStorage } from '@/_hooks';

interface IThemeContextProps {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as IThemeContextProps);

export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isLightModePreferred = useMediaQuery('(prefers-color-scheme: light)');
  const [themeName, setThemeName] = useLocalStorage('theme', isLightModePreferred ? 'light' : 'dark');
  const toggleTheme = () => setThemeName(themeName === 'light' ? 'dark' : 'light');

  const theme = themeName === 'light' ? LightTheme : DarkTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <ThemeContext.Provider value={{ themeName, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider >
  );
};