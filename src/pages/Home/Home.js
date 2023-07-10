import { apiReesult } from 'api';
import React, { useState, useEffect } from 'react';
import css from './home.module.css';
import Notiflix from 'notiflix';
import ListMovies from 'components/ListMovies/ListMovies';
const Home = () => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        await apiReesult().then(res => {
          setArr(res.data.results);
        });
      } catch ({ error }) {
        Notiflix.Notify.failure(error);
      }
    };

    fetchApi();
  }, []);

  return (
    <div>
      <h1 className={css.title}>Trending today</h1>
      <ListMovies detailsFilm={arr} />
    </div>
  );
};

export default Home;
