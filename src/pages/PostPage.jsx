import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const PostPage = () => {
  const params = useParams();
  const post = useSelector((store) =>
    store.posts.find((post) => +params.id === +post.id)
  );

  return (
    <>
      <Typography gutterBottom variant="h4" sx={{ mb: 6 }}>
        {post.title}
      </Typography>
      <Typography gutterBottom variant="h6" sx={{ mb: 6 }}>
        {post.description}
      </Typography>
    </>
  );
};

export default PostPage;
