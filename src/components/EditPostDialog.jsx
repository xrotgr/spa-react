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
import { editPost } from '../postsSlice';

export const EditPostDialog = ({ id, open, handleEditClose }) => {
  const dispatch = useDispatch();

  const dispatchEdit = (values) => {
    dispatch(editPost({ id, values }));
    handleEditClose();
  };

  return (
    <Dialog open={open} sx={{ p: 3 }}>
      <DialogTitle>Edit post</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odit
          quis totam aspernatur minus placeat?
        </DialogContentText>

        <PostForm dispatchInput={dispatchEdit} />
      </DialogContent>
      <DialogActions>
        <Button type="submit" form="formID" variant="contained" color="success">
          Edit post
        </Button>
        <Button variant="contained" onClick={handleEditClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
