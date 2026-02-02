import { useState } from 'react';
import { TextField } from '@mui/material';

interface PostFormProps {
  onSubmit: (formData: { title: string; body: string }) => void;
}

export const PostForm = ({ onSubmit }: PostFormProps) => {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
  });

  const resetForm = () =>
    setFormData({
      title: '',
      body: '',
    });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    resetForm();
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
