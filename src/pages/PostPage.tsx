import { useParams } from 'react-router-dom';
import { Typography, Box, CircularProgress } from '@mui/material';
import { useGetPostQuery } from '../api.slice';
import NotFoundPage from './NotFoundPage';
import { PostComments } from '@/components/PostComments';
import { skipToken } from '@reduxjs/toolkit/query';

const PostPage = () => {
  const params = useParams();
  const postId = params.id ? parseInt(params.id, 10) : null;

  const { data: post, isFetching: postsFetching } = useGetPostQuery(
    postId ?? skipToken
  );

  if (!postId || isNaN(+postId)) {
    return <NotFoundPage />;
  }

  if (postsFetching) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Typography gutterBottom variant="h4" sx={{ mb: 6 }}>
        {post?.title}
      </Typography>
      <Typography gutterBottom variant="h6" sx={{ mb: 6 }}>
        {post?.body}
      </Typography>
      <PostComments postId={postId} />
    </>
  );
};

export default PostPage;
