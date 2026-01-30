import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { PostForm } from './PostForm';
import { createPost } from '../postsSlice';

export const CreatePostDialog = ({ open, handleCreateClose }) => {
  const dispatch = useDispatch();

  const dispatchCreate = (values) => {
    dispatch(createPost(values));
    handleCreateClose();
  };

  return (
    <Dialog open={open} sx={{ p: 3 }}>
      <DialogTitle>Create post</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odit
          quis totam aspernatur minus fugit iure blanditiis omnis nobis minima.
          Exercitationem nobis modi voluptatum natus quidem minus? Vel, cum
          placeat?
        </DialogContentText>

        <PostForm dispatchInput={dispatchCreate} />
      </DialogContent>
      <DialogActions>
        <Button type="submit" form="formID" variant="contained" color="success">
          Create post
        </Button>
        <Button variant="contained" onClick={handleCreateClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
