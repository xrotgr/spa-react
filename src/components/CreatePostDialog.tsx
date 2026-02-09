import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
} from '@mui/material';

import { PostForm } from './PostForm';
import { useCreatePostMutation } from '@/api.slice';
import { toast } from 'react-toastify';

interface CreatePostDialogProps {
  open: boolean;
  onClose: () => void;
}

export const CreatePostDialog = ({ open, onClose }: CreatePostDialogProps) => {
  const [createPost] = useCreatePostMutation();

  const handleSubmit = async (formData: { title: string; body: string }) => {
    try {
      await createPost(formData).unwrap();
      toast.success('Post has been created!');
      onClose();
    } catch (e) {
      toast.error('Something went wrong :(');
    }
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

        <PostForm onSubmit={handleSubmit} />
      </DialogContent>
      <DialogActions>
        <Button type="submit" form="formID" variant="contained" color="success">
          Create post
        </Button>
        <Button variant="contained" onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
