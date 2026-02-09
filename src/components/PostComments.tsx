import { useGetCommentsQuery } from '@/api.slice';
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
  Avatar,
  ListItemText,
  Divider,
  CircularProgress,
} from '@mui/material';
import { Fragment } from 'react/jsx-runtime';

interface PostCommentsProps {
  postId: number;
}

export const PostComments = ({ postId }: PostCommentsProps) => {
  const { data: comments = [], isFetching: commentsFetching } =
    useGetCommentsQuery(postId);

  if (commentsFetching) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h5">Comments</Typography>
      <List>
        {comments.map((comment) => {
          return (
            <Fragment key={comment.id}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>H</Avatar>
                </ListItemAvatar>
                <ListItemText primary={comment.name} secondary={comment.body} />
              </ListItem>
              <Divider />
            </Fragment>
          );
        })}
      </List>
    </Box>
  );
};
