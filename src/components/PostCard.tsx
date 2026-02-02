import { Post, User } from '@/types/types';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
} from '@mui/material';
import { Link } from 'react-router-dom';

interface PostCardProps extends Post {
  user?: User;
}

export const PostCard = ({ title, id, user }: PostCardProps) => {
  return (
    <Card
      variant="outlined"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        pl: 2,
        pb: 2,
        height: '100%',
      }}
    >
      <CardContent>
        <Box>
          <Typography
            color="#000000"
            gutterBottom
            component={Link}
            to={`users/${user?.id}`}
            variant="body1"
            sx={{
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            {user?.username}
          </Typography>
        </Box>
        <Typography
          variant="h6"
          color="#000000"
          sx={{ textDecoration: 'none' }}
          component={Link}
          to={`posts/${id}`}
        >
          {title}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          component={Link}
          to={`posts/${id}`}
          variant="contained"
          color="primary"
          sx={{ borderRadius: '0.5rem' }}
        >
          Read more
        </Button>
      </CardActions>
    </Card>
  );
};
//
