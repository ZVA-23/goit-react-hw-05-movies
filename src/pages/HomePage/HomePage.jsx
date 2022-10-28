import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../servises/moviesApi';
import { useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import {
  HomeContainer,
  HomeTitle,
  MovieList,
  MovieItem,
  MovieLink,
  MovieImg,
  MovieTitle,
} from './HomePage.styled';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    fetchTrendingMovies()
      .then(setMovies)
      .catch(error => console.log(error));
    setIsLoading(false);
  }, []);
  // console.log(movies);

  return (
    <HomeContainer>
      <HomeTitle>Tranding today</HomeTitle>
      {isLoading && <Loader />}
      {movies.length > 0 && (
        <MovieList>
          {movies.map(({ id, title, poster_path }) => (
            <MovieItem key={id}>
              <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                <MovieImg
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={title}
                />
                <MovieTitle>
                  <h3>{title}</h3>
                </MovieTitle>
              </MovieLink>
            </MovieItem>
          ))}
        </MovieList>
      )}
    </HomeContainer>
  );
};
