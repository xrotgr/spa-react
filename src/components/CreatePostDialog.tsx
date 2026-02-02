import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
} from '@mui/material';

import { PostForm } from './PostForm';
import { toast } from 'react-toastify';

interface CreatePostDialogProps {
  open: boolean;
  onClose: () => void;
}

export const CreatePostDialog = ({ open, onClose }: CreatePostDialogProps) => {
  const notify = () => toast('Post have been created!');

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

        <PostForm />
      </DialogContent>
      <DialogActions>
        <Button
          type="submit"
          form="formID"
          variant="contained"
          color="success"
          onClick={() => {
            onClose();
            notify();
          }}
        >
          Create post
        </Button>
        <Button variant="contained" onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
