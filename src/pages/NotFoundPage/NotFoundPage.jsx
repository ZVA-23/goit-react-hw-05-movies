import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <>
      <h2>Oops... nothing found...</h2>
      <Link to="/">Back to home</Link>
    </>
  );
};
