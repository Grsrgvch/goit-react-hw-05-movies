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
  const [year, setYear] = useState();
  const navigate = useNavigate();
  const placeholderImageURL =
    'https://kartinki.pics/uploads/posts/2022-03/1646240334_2-kartinkin-net-p-kartinki-krasivaya-noch-2.jpg';

  const goBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    async function getMovie() {
      try {
        const { data } = await GetMovies.getMovieDetails(params.movieId);
        setMovie(data);
        const releaseDate = new Date(data.release_date);
        const releaseYear = releaseDate.getFullYear();
        setYear(releaseYear);
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
          {movie.poster_path ? (
            <MovieImage
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.original_title}
            />
          ) : (
            <MovieImage src={placeholderImageURL} alt={movie.original_title} />
          )}
          <MovieTitle>
            {movie.original_title} ({year})
          </MovieTitle>
          <UserScore>
            User Score: {Number.parseInt(movie.vote_average * 10)}%
          </UserScore>
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
