import { Card } from '@mui/material';
import { Link } from 'react-router-dom';

export const PostCard = ({ title, id }) => {
  return (
    <Card variant="outlined" sx={{ pl: 2, bgcolor: 'secondary.main' }}>
      <Link to={`posts/${id}`}>
        <h3>{title}</h3>
      </Link>
    </Card>
  );
};
