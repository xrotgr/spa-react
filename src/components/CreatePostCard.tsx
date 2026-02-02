import { Card, Button, Container, Typography } from '@mui/material';
import { CreatePostDialog } from './CreatePostDialog';
import { useState } from 'react';

export const CreatePostCard = () => {
  const [formDialogOpen, setFormDialogOpen] = useState(false);

  const handleClickOpen = () => setFormDialogOpen(true);
  const handleClose = () => setFormDialogOpen(false);

  return (
    <Container maxWidth="sm">
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: 4,
          mb: 3,
          borderRadius: '1rem',
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Create your own unique post!
        </Typography>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Share your thoughts on any topic
        </Typography>

        <Button
          variant="contained"
          size="large"
          color="success"
          onClick={handleClickOpen}
        >
          Create Post
        </Button>
        <CreatePostDialog open={formDialogOpen} onClose={handleClose} />
      </Card>
    </Container>
  );
};
