import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2d2a2a',
    },

    secondary: {
      main: '#b1adad',
    },

    background: {
      default: 'rgb(234, 234, 234)',
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
        // variant: 'contained',
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
        },
      },
    },
  },
});
