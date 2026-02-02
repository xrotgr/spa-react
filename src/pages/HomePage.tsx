import { PostCard } from '../components/PostCard';
import { CreatePostCard } from '../components/CreatePostCard';
import { Grid, CircularProgress, Box, Typography, Button } from '@mui/material';
import { useGetPostsQuery, useGetUsersQuery } from '../api.slice';
import { Post } from '@/types/types';

const HomePage = () => {
  const {
    data: posts = [],
    isFetching: postsFetching,
    refetch,
  } = useGetPostsQuery();

  const { data: users = [], isFetching: usersFetching } = useGetUsersQuery();

  if (postsFetching || usersFetching) {
    return (
      <>
        <CreatePostCard />
        <Button
          variant="contained"
          onClick={refetch}
          sx={{
            display: 'block',
            mx: 'auto',
            my: 2,
          }}
        >
          Refetch Posts
        </Button>
        <Typography variant="h5" align="center" sx={{ m: 5 }}>
          Or you can read the latest posts all over the world!
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      </>
    );
  }

  const userMap = new Map(users.map((user) => [user.id, user]));

  return (
    <>
      <CreatePostCard />
      <Button
        variant="contained"
        onClick={refetch}
        sx={{
          display: 'block',
          mx: 'auto',
          my: 2,
        }}
      >
        Refetch Posts
      </Button>
      <Typography variant="h5" align="center" sx={{ m: 5 }}>
        Or you can read the latest posts all over the world!
      </Typography>
      <Grid container spacing={2} sx={{ mb: 6 }}>
        {posts.map((post: Post) => (
          <Grid key={post.id} size={{ xs: 12, sm: 6, lg: 4 }}>
            <PostCard
              {...post}
              user={post.userId ? userMap.get(post.userId) : undefined}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default HomePage;
