import { PostCard } from '../components/PostCard.jsx';
import { CreatePost } from '../components/CreatePost.jsx';
import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const posts = useSelector((store) => {
    return store.posts;
  });

  return (
    <>
      <CreatePost />
      <Typography variant="h5" align="center" sx={{ m: 5 }}>
        Or you can read the latest posts all over the world!
      </Typography>
      <Grid container spacing={2} sx={{ mb: 6 }}>
        {posts.map((post) => (
          <Grid key={post.id} size={{ xs: 12, sm: 6, lg: 4 }}>
            <PostCard {...post} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default HomePage;
