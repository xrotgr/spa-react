import { useState } from 'react';
import { TextField } from '@mui/material';
import { useCreatePostMutation } from '../api.slice';

export const PostForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
  });

  const [createPost] = useCreatePostMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createPost(formData).unwrap();
      setFormData({
        title: '',
        body: '',
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
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
  );
};
