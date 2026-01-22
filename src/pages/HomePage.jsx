import { PostCard } from '../components/PostCard.jsx';
import { CreatePost } from '../components/CreatePost.jsx';

import { useState, useEffect } from 'react';
import { Grid, CircularProgress, Box, Typography } from '@mui/material';
import axios from 'axios';

const url = import.meta.env.VITE_API_URL;

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersRes, postsRes] = await Promise.all([
          axios.get(`${url}/users`),
          axios.get(`${url}/posts`),
        ]);
        setUsers(usersRes.data);
        setPosts(postsRes.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading)
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );

  return (
    <>
      <CreatePost posts={posts} setPosts={setPosts} />
      <Typography variant="h5" align="center" sx={{ m: 5 }}>
        Or you can read the latest posts all over the world!
      </Typography>
      <Grid container spacing={2} sx={{ mb: 6 }}>
        {posts.map((post) => (
          <Grid key={post.id} size={{ xs: 12, sm: 6, lg: 4 }}>
            <PostCard {...post} users={users} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default HomePage;
