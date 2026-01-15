import { PostCard } from '../components/PostCard.jsx';
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import axios from 'axios';

const url = import.meta.env.VITE_API_URL;

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${url}/posts`);
        setPosts(response.data);
      } catch (error) {
        console.log('Ошибка при загрузке данных', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <Grid container spacing={2} sx={{ mb: 6 }}>
      {posts.map((post) => (
        <Grid key={post.id} size={{ xs: 12, sm: 6, lg: 4 }}>
          <PostCard {...post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;
