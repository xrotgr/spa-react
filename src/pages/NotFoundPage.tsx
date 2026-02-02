import { Link } from 'react-router-dom';
import { Button, Typography, Box } from '@mui/material';

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
      }}
    >
      <Typography variant="h3">404</Typography>
      <Typography variant="h5" sx={{ display: 'block' }}>
        Page not Found
      </Typography>
      <Button size="large" variant="contained" component={Link} to={'/'}>
        Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
