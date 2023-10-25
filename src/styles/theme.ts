// import { createTheme } from '@mui/material';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material' {
  export interface ThemeOptions {
    colors: {
      primary100: string;
      secondary100: string;
      danger500: string;
    };
    fontSize: {
      small: string;
      medium: string;
      large: string;
    };
    fontWeight: {
      regular: string;
      medium: string;
      bold: string;
    };
  }
  interface Colors {
    /**
     * primary100: '',
     */
    primary100: string;
  }

  interface FontSizes {
    /**
     * small: 1.2 rem
     */
    small: string;
    /**
     * medium: 1.8 rem
     */
    medium: string;
    /**
     * large: 2.4 rem
     */
    large: string;
  }

  interface fontWeight {
    regular: string;
    medium: string;
    bold: string;
  }

  export interface Theme {
    colors: Colors;
    fontSize: FontSizes;
    fontWeight: fontWeight;
  }
}

export const theme = createTheme({
  colors: {
    primary100: '',
    secondary100: '',
    danger500: ''
  },
  fontSize: {
    small: '12px',
    medium: '1em',
    large: '1.3em'
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    bold: '700'
  },
  typography: {
    fontFamily: ['Poppins', 'Arial', 'sans-serif'].join(',')
    // You can also specify other typography settings here if needed
  }
});
