import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

const url = import.meta.env.VITE_API_URL;

const PostPage = () => {
  const [post, setPost] = useState({});
  const params = useParams();
  console.log(params);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${url}/posts/${params.id}`);
        setPost(response.data);
        console.log(response.data);
      } catch {}
    };
    fetchPost();
  }, []);

  return (
    <>
      <Typography variant="h5" align="center">
        {post.title}
      </Typography>
      <Typography variant="body1" align="center">
        {post.body}
      </Typography>
    </>
  );
};

export default PostPage;
