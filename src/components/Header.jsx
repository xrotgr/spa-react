import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';

export const Header = ({ heading }) => {
  return (
    <AppBar position="static" sx={{ mb: 3, bgcolor: 'primary.main' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {heading}
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
