import { POSTS } from '../constants/posts.js';
import { PostCard } from '../components/PostCard.jsx';
import { useState } from 'react';
import { Grid } from '@mui/material';

const HomePage = () => {
  const [posts, setPosts] = useState(POSTS);
  return (
    <Grid container spacing={2} sx={{ mb: 6 }}>
      {posts.map((post) => (
        <Grid item key={post.id} size={{ xs: 12, sm: 6, lg: 4 }}>
          <PostCard {...post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;
