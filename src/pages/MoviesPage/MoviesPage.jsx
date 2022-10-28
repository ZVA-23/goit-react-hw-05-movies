import { Loader } from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { fetchMoviesByQuery, fetchMoviesById } from '../../servises/moviesApi';
import { useSearchParams, useLocation } from 'react-router-dom';
import {
  FormInfo,
  Form,
  Input,
  FormBtn,
  MoviesList,
  MoviesItem,
  MoviesLink,
  MoviesImg,
  MoviesTitle,
} from './MoviesPage.styled';

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const serchQuery = searchParams.get('query');
  // console.log(serchQuery);
  const location = useLocation();

  useEffect(() => {
    if (serchQuery === null || serchQuery === '') return;

    async function fetchQuery() {
      setIsLoading(true);
      await fetchMoviesByQuery(serchQuery)
        .then(data => {
          setMovies(data);
          if (!data.length) {
            setError(true);
          }
        })
        .catch(setError)
        .finally(() => {
          setIsLoading(false);
        });
    }
    fetchQuery();
  }, [serchQuery]);
  console.log(movies);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    setSearchParams({ query: form.elements.queryName.value });
    form.reset();
    setError(false);
  };

  return (
    <>
      <FormInfo>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="queryName"
            autoComplete="off"
            placeholder="Search movies"
          />
          <FormBtn type="submit">Search</FormBtn>
        </Form>
      </FormInfo>
      {movies && (
        <MoviesList>
          {movies.map(({ id, title, poster_path }) => {
            return (
              <MoviesItem
                key={id}
                onClick={() => {
                  fetchMoviesById(id);
                }}
              >
                <MoviesLink to={`/movies/${id}`} state={{ from: location }}>
                  <MoviesImg
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={title}
                  />
                  <MoviesTitle>
                    <h3>{title}</h3>
                  </MoviesTitle>
                </MoviesLink>
              </MoviesItem>
            );
          })}
        </MoviesList>
      )}
      {error && <p>No results for your request!</p>}
      {isLoading && <Loader />}
    </>
  );
};
export default MoviesPage;
