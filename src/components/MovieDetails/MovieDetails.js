import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { apiFilmById } from 'api';

const MovieDetails = () => {
  const [film, setFilm] = useState();
  const { filmId } = useParams();

  useEffect(() => {
    apiFilmById(filmId)
      .then(response => response.json())
      .then(response => setFilm(response))
      .catch(err => console.error(err));
  }, [filmId]);

  return (
    <div>
      <h1>{film.title}</h1>
      <p>User Score: {film.vote_count}%</p>
      <h2>Overview</h2>
      <p>{film.overview}</p>
      <h2>Genres</h2>
      <p>
        {film.genres.map(genre => (
          <ul>
            <li>{genre.name}</li>
          </ul>
        ))}
      </p>
    </div>
  );
};

export default MovieDetails;
