import { Link } from 'react-router-dom';
import apiReesult from '../api';
import React, { useState, useEffect } from 'react';
import css from './home.module.css';
const Home = () => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const api = () => {
      apiReesult('trending/all/day')
        .then(response => response.json())
        .then(response => setArr(response.results))
        .catch(err => console.error(err));
    };
    api();
  }, [setArr]);

  console.log(arr);

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
