import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <h1>404</h1>
      <div>Not Found</div>
      <Link to={'/'}>
        <button>Home</button>
      </Link>
    </>
  );
};

export default NotFoundPage;
