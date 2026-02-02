import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        bgcolor: 'primary.main',
        mt: 4,
        py: 4,
      }}
    >
      <Typography
        component={Link}
        to="/"
        color="#ffffff"
        sx={{
          textDecoration: 'none',
          '&:hover': { textDecoration: 'underline' },
        }}
      >
        © My Website
      </Typography>
    </Box>
  );
};
