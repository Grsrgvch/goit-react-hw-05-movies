import axios from 'axios';

const API_KEY = '0ca8801a722358b1eb2bcacbc83f2a91';

export const getMovies = async search => {
  const result = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${API_KEY}`
  );
  return result;
};
export const getTopMovies = async () => {
  const result = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${API_KEY}`
  );
  return result;
};

export const getMovieDetails = async id => {
  const result = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );

  return result;
};
export const getMovieCast = async id => {
  const result = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
  );

  return result;
};
export const getMovieReviews = async id => {
  const result = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`
  );

  return result;
};
