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
        sx={{ textDecoration: 'none' }}
        component={Link}
        to="/"
        color="#ffffff"
      >
        © My Website
      </Typography>
    </Box>
  );
};
