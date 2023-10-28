import { useEffect, useState } from 'react';
import * as GetMovies from '../api-axios';
import {
  HomeContainer,
  MovieList,
  MovieItem,
  MovieLink,
  TopMoviesTitle,
} from '../styled/Home.styled';
const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    async function getTopMovies() {
      if (topMovies.length !== 0) {
        return;
      }
      const {
        data: { results },
      } = await GetMovies.getTopMovies();
      setTopMovies(results);
      try {
      } catch (error) {
        console.log('Error!');
      } finally {
      }
    }
    getTopMovies();
  }, [topMovies]);
  return (
    <HomeContainer>
      <TopMoviesTitle>Top Movies</TopMoviesTitle>

      <MovieList>
        {topMovies.map(topMovie => {
          return (
            <MovieItem key={topMovie.id}>
              <MovieLink to={`/movies/${topMovie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${topMovie.poster_path}`}
                  alt=""
                />
                <p>{topMovie.original_title}</p>
              </MovieLink>
            </MovieItem>
          );
        })}
      </MovieList>
    </HomeContainer>
  );
};
export default Home;
