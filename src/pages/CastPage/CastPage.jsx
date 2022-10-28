import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { fetchMovieCast } from '../../servises/moviesApi';
import {
  CastContainer,
  CastList,
  CastItem,
  CastImg,
  CastDescription,
  CastName,
  CastCharacter,
} from './CastPage.styled';

const CastPage = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchMovieCast(movieId)
      .then(data => setCast(data))
      .catch(setError)
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);
  console.log(cast);
  return (
    <CastContainer>
      {cast.length > 0 && (
        <CastList>
          {cast.map(({ id: cast_id, name, profile_path, character }) => {
            return (
              <CastItem key={cast_id}>
                <CastImg
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : 'https://www.freeiconspng.com/uploads/no-image-icon-7.gif'
                  }
                  alt={`${name}`}
                  width="100px"
                />
                <CastDescription>
                  <CastName>{name}</CastName>
                  <CastCharacter>Character: {character}</CastCharacter>
                </CastDescription>
              </CastItem>
            );
          })}
        </CastList>
      )}
      {error && <p>We don`t have any cast for this movie.</p>}
      {isLoading && <Loader />}
    </CastContainer>
  );
};
export default CastPage;
