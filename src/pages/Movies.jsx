import { useEffect, useState } from 'react';
import * as GetMovies from '../api-axios';
import { useSearchParams } from 'react-router-dom';
import {
  MoviesContainer,
  SearchTitle,
  SearchForm,
  MovieList,
  MovieItem,
  MovieLink,
} from '../styled/Movies.stiled';
const Movies = () => {
  const [inputQuery, setInputQuery] = useState('');

  const [arrMovies, setArrMovies] = useState([]);

  const [params, setParams] = useSearchParams();
  const query = params.get('query') ?? '';
  const placeholderImageURL =
    'https://kartinki.pics/uploads/posts/2022-03/1646240334_2-kartinkin-net-p-kartinki-krasivaya-noch-2.jpg';
  const handleChange = evt => {
    setInputQuery(evt.target.value);
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    params.set('query', inputQuery);
    setParams(params);
  };

  useEffect(() => {
    async function getSearchMovies() {
      if (query === '') {
        return;
      }
      const {
        data: { results },
      } = await GetMovies.getMovies(query);
      console.log(query);
      setArrMovies(results);
      try {
      } catch (error) {
        console.log('Error!');
      } finally {
      }
    }
    getSearchMovies();
  }, [query]);

  return (
    <MoviesContainer>
      <SearchTitle>Search Movies</SearchTitle>
      <SearchForm onSubmit={handleSubmit}>
        <button type="submit">Search</button>
        <input type="text" onChange={handleChange} />
      </SearchForm>
      <MovieList>
        {arrMovies.map(arrMovie => (
          <MovieItem key={arrMovie.id}>
            <MovieLink to={`/movies/${arrMovie.id}`}>
              {arrMovie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${arrMovie.poster_path}`}
                  alt={arrMovie.original_title}
                />
              ) : (
                <img src={placeholderImageURL} alt={arrMovie.original_title} />
              )}
              <p>{arrMovie.original_title}</p>
            </MovieLink>
          </MovieItem>
        ))}
      </MovieList>
    </MoviesContainer>
  );
};
export default Movies;
