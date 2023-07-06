import { Link } from 'react-router-dom';
import { apiReesult } from 'api';
import React, { useState, useEffect } from 'react';
import css from './home.module.css';
import Notiflix from 'notiflix';
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
      <ul className={css.ul}>
        {arr.map(film => (
          <li key={film.id} className={css.list}>
            <Link to={`/movies/${film.id}`}>{film.name || film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
