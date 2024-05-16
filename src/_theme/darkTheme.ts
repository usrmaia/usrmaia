import { ThemeOptions, createTheme } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';
import { GlobalTheme } from './globalTheme';

export const DarkTheme = createTheme(GlobalTheme, {
  palette: {
    mode: 'dark',
    background: {
      paper: grey[900],
      default: '#0f0f0f',
    },
    text: {
      primary: grey[50],
      secondary: grey[100],
      disabled: grey[400],
    }
  }
} as ThemeOptions);
