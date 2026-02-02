import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Box, Button } from '@mui/material';

interface HeaderProps {
  heading: string;
}

export const Header = ({ heading }: HeaderProps) => {
  return (
    <AppBar position="static" sx={{ mb: 3, bgcolor: 'primary.main' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button size="large" component={Link} to="/">
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
