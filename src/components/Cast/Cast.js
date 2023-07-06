import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCast } from 'api';
import css from './cast.module.css';
import Notiflix from 'notiflix';

const Cast = () => {
  const [casts, setCast] = useState();
  const { filmId } = useParams();

  useEffect(() => {
    const fetchApi = async filmId => {
      try {
        await fetchCast(filmId).then(res => {
          setCast(res.data.cast);
        });
      } catch ({ error }) {
        Notiflix.Notify.failure(error);
      }
    };

    if (filmId) {
      fetchApi(filmId);
    }
  }, [filmId]);

  return (
    <div>
      {casts && (
        <ul className={css.acter}>
          {casts.map(cast => (
            <li key={cast.id} className={css.acterCards}>
              <img
                width="100"
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                    : 'https://sahagroupfair.com/assets/frontend/img/image-not-available.png'
                }
                alt={cast.name}
              ></img>
              <h2>{cast.name}</h2>
              <h2>Character: {cast.character}</h2>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
