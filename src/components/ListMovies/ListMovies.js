import css from './ListMovies.module.css';
import { Link, useLocation } from 'react-router-dom';

const ListMovies = ({ detailsFilm }) => {
  const location = useLocation();
  return (
    <>
      {detailsFilm && (
        <ul className={css.list}>
          {detailsFilm.map(film => (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`} state={{ from: location }}>
                {film.name || film.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ListMovies;
