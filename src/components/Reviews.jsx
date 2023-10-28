import * as GetMovies from '../api-axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  ReviewsContainer,
  ReviewsList,
  ReviewItem,
} from '../styled/Reviews.styled';

const Reviews = () => {
  const params = useParams();

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    async function getReviews() {
      try {
        const {
          data: { results },
        } = await GetMovies.getMovieReviews(params.movieId);
        setReviews(results);
      } catch (error) {
        console.log('Error!');
      } finally {
      }
    }
    getReviews();
  }, [params.movieId]);
  return (
    <ReviewsContainer>
      <ReviewsList>
        {reviews.length === 0 ? (
          <p>Not reviews</p>
        ) : (
          reviews.map(review => (
            <ReviewItem key={review.id}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
            </ReviewItem>
          ))
        )}
      </ReviewsList>
    </ReviewsContainer>
  );
};
export default Reviews;
