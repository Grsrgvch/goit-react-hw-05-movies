import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as GetMovies from '../api-axios';
import { CastContainer, CastList, CastItem } from '../styled/Cast.styled';
const Cast = () => {
  const params = useParams();
  const placeholderImageURL =
    'https://img.freepik.com/premium-photo/man-without-a-face-an-impersonal-man-mannequin-anonymous-portrait-of-a-man-abstract-identity-illustration_91497-8312.jpg?w=826';
  const [casts, setCasts] = useState([]);
  useEffect(() => {
    async function getMovie() {
      try {
        const {
          data: { cast },
        } = await GetMovies.getMovieCast(params.movieId);
        setCasts(cast);
      } catch (error) {
        console.log('Error!');
      } finally {
      }
    }
    getMovie();
  }, [params.movieId]);
  return (
    <CastContainer>
      <CastList>
        {casts.length === 0 ? (
          <p>Not Cast</p>
        ) : (
          casts.map(cast => (
            <CastItem key={cast.id}>
              {cast.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
                  alt={cast.name}
                />
              ) : (
                <img src={placeholderImageURL} alt={cast.name} />
              )}
              <p>{cast.name}</p>
            </CastItem>
          ))
        )}
      </CastList>
    </CastContainer>
  );
};
export default Cast;
