import { Card } from '@mui/material';

export const PostCard = ({ title, description, author }) => {
  return (
    <Card variant="outlined" sx={{ pl: 2, bgcolor: 'secondary.main' }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{author}</p>
    </Card>
  );
};
