import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
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

const url = import.meta.env.VITE_API_URL;

const PostPage = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [postRes, CommentsRes] = await Promise.all([
          axios.get(`${url}/posts/${params.id}`),
          axios.get(`${url}/comments`),
        ]);
        setPost(postRes.data);
        setComments(CommentsRes.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

  const postComments = comments.filter((comment) => comment.postId === post.id);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }
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
