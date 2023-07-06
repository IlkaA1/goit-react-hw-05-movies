import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { fetchSearchFilm } from 'api';
import Notiflix from 'notiflix';

const SearchMovies = () => {
  const [search, setSearch] = useState(null);
  const [detailsFilm, setDetailsFilm] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const film = searchParams.get('query');

  useEffect(() => {
    const fetchApi = async search => {
      try {
        await fetchSearchFilm(search).then(res => {
          setDetailsFilm(res.data.results);
        });
      } catch ({ error }) {
        Notiflix.Notify.failure(error);
      }
    };

    if (film === null) {
      return;
    } else if (film) {
      fetchApi(film);
    }

    if (search) {
      fetchApi(search);
    }
  }, [search, film, detailsFilm]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target.film.value;
    setSearchParams({ query: form });
    setSearch(form);

    e.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="film" />
        <button type="submit">Search</button>
      </form>
      {detailsFilm && (
        <ul>
          {detailsFilm.map(film => (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`}>{film.name || film.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SearchMovies;
