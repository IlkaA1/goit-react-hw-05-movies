import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchFilm } from 'api';

import Notiflix from 'notiflix';
import css from './movies.module.css';
import ListMovies from 'components/ListMovies/ListMovies';

const Movies = () => {
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
    if (!form) {
      return Notiflix.Notify.failure('Please fill in the search field');
    }
    setSearchParams({ query: form });
    setSearch(form);

    e.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.bg}>
        <input type="text" name="film" className={css.input} />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>

      <ListMovies detailsFilm={detailsFilm} />
    </>
  );
};

export default Movies;
