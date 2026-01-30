import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePost } from '../postsSlice';
import { useState } from 'react';
import { EditPostDialog } from './EditPostDialog';

export const PostCard = ({ title, id }) => {
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  const handleEditOpen = () => setEditDialogOpen(true);
  const handleEditClose = () => setEditDialogOpen(false);

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deletePost(id));
  const handleEdit = () => {
    setEditDialogOpen(true);
  };

  if (editDialogOpen) {
    return (
      <EditPostDialog
        id={id}
        open={handleEditOpen}
        handleEditClose={handleEditClose}
      />
    );
  }

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
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: '0.5rem' }}
          onClick={handleDelete}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: '0.5rem' }}
          onClick={handleEdit}
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};
//
