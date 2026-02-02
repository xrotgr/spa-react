import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2d2a2a',
    },

    secondary: {
      main: '#b1acac',
    },

    background: {
      default: '#eaeaea',
      paper: '#ffffff',
    },
  },

  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },

  components: {
    MuiButton: {
      defaultProps: {
        color: 'secondary',
      },
    },
  },
});
