import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { fetchArticlesWithQuery } from 'api';
import { Link, Outlet } from 'react-router-dom';
import { BackLink } from 'components/BackLink/BackLink';
import Notiflix from 'notiflix';

import css from './movieDetails.module.css';

const MovieDetails = () => {
  const [film, setFilm] = useState();
  const { filmId } = useParams();

  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/movies';
  const ref = useRef(backLinkHref);

  useEffect(() => {
    const fetchApi = async filmId => {
      try {
        await fetchArticlesWithQuery(filmId).then(res => {
          setFilm(res.data);
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
      {film && (
        <>
          <BackLink to={ref.current} />
          <div className={css.flex}>
            <img
              width="200"
              src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
              alt=""
            ></img>
            <div className={css.text}>
              <h1>{film.title}</h1>
              <p>User Score: {film.vote_count}%</p>
              <h2>Overview</h2>
              <p>{film.overview}</p>
              <h2>Genres</h2>
              {film.genres.map(genre => (
                <p key={genre.id}>{genre.name}</p>
              ))}
            </div>
          </div>
        </>
      )}
      <div className={css.moreInfo}>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="credits" state={{ from: location }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
