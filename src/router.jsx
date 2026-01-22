import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import { Footer } from './components/Footer.jsx';
import { Header } from './components/Header.jsx';
import { Box, Container } from '@mui/material';
import PostPage from './pages/PostPage.jsx';

const Root = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header heading="Logo" />
      <Container maxWidth="lg" sx={{ flexGrow: 1, py: 4 }}>
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};

export const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/posts/:id', element: <PostPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
