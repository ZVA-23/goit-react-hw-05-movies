import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../servises/moviesApi';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies()
      .then(setMovies)
      .catch(error => console.log(error));
  }, []);
  console.log(movies);

  return (
    <>
      <h2>Trending today</h2>
      {movies && (
        <ul>
          {movies.map(({ original_title, id }) => {
            return (
              <li key={id}>
                <Link>{original_title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
