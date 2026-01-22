import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Box, Button } from '@mui/material';

export const Header = ({ heading }) => {
  return (
    <AppBar position="static" sx={{ mb: 3, bgcolor: 'primary.main' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button size="large" component={Link}>
          {heading}
        </Button>
        <Box>
          <Button component={Link} to="/">
            Home
          </Button>
          <Button component={Link} to="/about">
            About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
