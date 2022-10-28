import { Suspense } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useParams, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMoviesById } from '../../servises/moviesApi';
import {
  DetailsContainer,
  DetailsBtn,
  DetailsImg,
  DetailsInfo,
  DetailsTitle,
  AddInfo,
  InfoList,
  InfoLink,
  // DetailsInfo,
  // DetailsImg,
} from './MovieDetailsPage.style';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  // console.log(location);
  const navigation = useNavigate();

  const onBtnClick = () => {
    navigation(location?.state?.from ?? '/');
  };

  useEffect(() => {
    fetchMoviesById(movieId)
      .then(setMovie)
      .catch(error => console.log(error));
  }, [movieId]);

  if (!movie) return;

  return (
    <>
      <DetailsBtn onClick={onBtnClick}>Go back</DetailsBtn>
      <DetailsContainer>
        <>
          <DetailsImg
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            width="300"
          />
        </>
        <DetailsInfo>
          <DetailsTitle>
            {movie.title} ({`${movie.release_date}`.slice(0, 4)})
          </DetailsTitle>
          <p>Use score: {Math.round(movie.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
        </DetailsInfo>
      </DetailsContainer>

      <div>
        <AddInfo>Additional information</AddInfo>
        <nav>
          <InfoList>
            <li>
              <InfoLink to="cast" state={location?.state?.from ?? '/'}>
                Cast
              </InfoLink>
            </li>
            <li>
              <InfoLink to="reviews" state={location?.state?.from ?? '/'}>
                Reviews
              </InfoLink>
            </li>
          </InfoList>
        </nav>
      </div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetailsPage;
