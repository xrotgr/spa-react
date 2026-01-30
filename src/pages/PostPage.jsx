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
import { useSelector } from 'react-redux';

const url = import.meta.env.VITE_API_URL;

const PostPage = () => {
  // console.log('post', initialPost);

  // const [post, setPost] = useState(initialPost);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  console.log('params', params);

  const post = useSelector((store) =>
    store.posts.find((post) => +params.id === +post.id)
  );

  // if (loading) {
  //   return (
  //     <Box sx={{ display: 'flex', justifyContent: 'center' }}>
  //       <CircularProgress />
  //     </Box>
  //   );
  // }

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
