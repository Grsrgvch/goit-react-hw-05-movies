import { useState, useEffect } from 'react';
import { useParams, Outlet, useNavigate } from 'react-router-dom';
import * as GetMovies from '../api-axios';

import {
  MovieDetailsContainer,
  BackButton,
  MovieImage,
  MovieTitle,
  UserScore,
  OverviewTitle,
  GenresTitle,
  GenresList,
  GenreItem,
  AdditionalInfoTitle,
  AdditionalInfoList,
  AdditionalInfoItem,
  AdditionalInfoLink,
  CastReviewsLink,
  OverviewText,
} from '../styled/MovieDetails.styled';

const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    async function getMovie() {
      try {
        const { data } = await GetMovies.getMovieDetails(params.movieId);
        setMovie(data);
      } catch (error) {
        console.log('Error!');
      } finally {
      }
    }
    getMovie();
  }, [params.movieId]);
  return (
    <MovieDetailsContainer>
      {movie && (
        <div>
          <BackButton onClick={goBack}>Go back</BackButton>
          <MovieImage
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.original_title}
          />
          <MovieTitle>
            {movie.original_title} ({movie.release_date})
          </MovieTitle>
          <UserScore>User Score: {movie.popularity}%</UserScore>
          <OverviewTitle>Overview</OverviewTitle>
          <OverviewText>{movie.overview}</OverviewText>
          <GenresTitle>Genres</GenresTitle>
          <GenresList>
            {movie.genres.map(genre => (
              <GenreItem key={genre.id}>{genre.name}</GenreItem>
            ))}
          </GenresList>
          <AdditionalInfoTitle>Additional Information</AdditionalInfoTitle>
          <AdditionalInfoList>
            <AdditionalInfoItem>
              <AdditionalInfoLink to={`/movies/${params.movieId}/cast`}>
                Cast
              </AdditionalInfoLink>
            </AdditionalInfoItem>
            <AdditionalInfoItem>
              <CastReviewsLink to={`/movies/${params.movieId}/reviews`}>
                Reviews
              </CastReviewsLink>
            </AdditionalInfoItem>
          </AdditionalInfoList>
          <Outlet />
        </div>
      )}
    </MovieDetailsContainer>
  );
};
export default MovieDetails;
