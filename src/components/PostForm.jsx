import { TextField } from '@mui/material';
import { useState } from 'react';

export const PostForm = ({ dispatchInput }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchInput(formData);
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
        name="description"
        fullWidth
        required
        label="Body"
        multiline
        minRows={8}
        margin="normal"
        value={formData.description}
        onChange={handleChange}
      />
    </form>
  );
};
