import { useParams } from 'react-router-dom';
import {
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Box,
  Avatar,
  CircularProgress,
} from '@mui/material';
import { Fragment } from 'react';
import { useGetCommentsQuery, useGetPostQuery } from '../api.slice';
import NotFoundPage from './NotFoundPage';

const PostPage = () => {
  const params = useParams();
  const postId = params.id ? parseInt(params.id, 10) : null;

  if (!postId || isNaN(+postId)) {
    return <NotFoundPage />;
  }

  const { data: post, isFetching: postsFetching } = useGetPostQuery(postId);

  const { data: comments = [], isFetching: commentsFetching } =
    useGetCommentsQuery();

  if (!post || postsFetching || commentsFetching) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  const postComments = comments.filter((comment) => comment.postId === post.id);

  return (
    <>
      <Typography gutterBottom variant="h4" sx={{ mb: 6 }}>
        {post.title}
      </Typography>
      <Typography gutterBottom variant="h6" sx={{ mb: 6 }}>
        {post.body}
      </Typography>
      <Box>
        <Typography variant="h5">Comments</Typography>
        <List>
          {postComments.map((postComment) => {
            return (
              <Fragment key={postComment.id}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>H</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={postComment.name}
                    secondary={postComment.body}
                  />
                </ListItem>
                <Divider />
              </Fragment>
            );
          })}
        </List>
      </Box>
    </>
  );
};

export default PostPage;
