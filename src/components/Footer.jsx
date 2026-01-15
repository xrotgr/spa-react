import { Box, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 4,
        py: 4,
        borderTop: '1px solid #160a0a',
      }}
    >
      <Typography variant="body2" align="center">
        <Link to="/" color="inherit">
          © My Website
        </Link>
      </Typography>
    </Box>
  );
};
