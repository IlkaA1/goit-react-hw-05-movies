import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import apiReesult from 'api';

const MovieDetails = () => {
  const { filmId } = useParams();
  console.log(filmId);

  useEffect(() => {
    apiReesult('movie', filmId)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  });
};

export default MovieDetails;
