import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../servises/moviesApi';
import { ReviewsContainer } from './ReviewPage.styled';

const ReviewsPage = () => {
  const [review, setReview] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchMovieReviews(movieId)
      .then(data => {
        setReview(data);
        if (!data.length) {
          setError(true);
        }
      })
      .catch(setError)
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return (
    <ReviewsContainer>
      {review && (
        <ul>
          {review.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
      {error && <p>We don't have any reviews for this movie. </p>}
      {isLoading && <Loader />}
    </ReviewsContainer>
  );
};
export default ReviewsPage;
