import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  TextField,
  Snackbar,
} from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

const url = import.meta.env.VITE_API_URL;

export const FormDialog = ({ posts, setPosts, formDialogOpen, onClose }) => {
  const [formData, setFormData] = useState({
    userId: Math.random(),
    title: '',
    body: '',
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/posts`, formData);
      console.log(response);
      setPosts([response.data, ...posts]);
      setFormData({
        userId: Math.random(),
        title: '',
        body: '',
      });
      setSubmitSuccess(true);
    } catch (e) {
      console.log(e);
      setSubmitSuccess(false);
    } finally {
      setFormSubmitted(true);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  if (formSubmitted) {
    return (
      <Snackbar
        open={formSubmitted}
        autoHideDuration={3000}
        onClose={() => {
          setFormSubmitted(false);
          onClose();
        }}
        message={
          submitSuccess
            ? 'Post has been successfully created!'
            : 'Something went wrong, please, try again later'
        }
      />
    );
  }

  return (
    <Dialog open={formDialogOpen} sx={{ p: 3 }}>
      <DialogTitle>Create post</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odit
          quis totam aspernatur minus fugit iure blanditiis omnis nobis minima.
          Exercitationem nobis modi voluptatum natus quidem minus? Vel, cum
          placeat?
        </DialogContentText>
        <form onSubmit={handleSubmit} id="formID">
          <TextField
            name="title"
            fullWidth
            required
            label="Title"
            margin="normal"
            value={formData.title}
            onChange={handleChange}
          />
          <TextField
            name="body"
            fullWidth
            required
            label="Body"
            multiline
            minRows={8}
            margin="normal"
            value={formData.body}
            onChange={handleChange}
          />
        </form>
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
