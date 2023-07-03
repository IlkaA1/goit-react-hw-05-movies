import { Routes, Route } from 'react-router-dom';
// import { lazy, Suspense } from 'react';
// import css from './app.module.css';
import Header from './Header/Header';
import Home from '../pages/Home';
import MovieDetails from './MovieDetails/MovieDetails';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies">
          <Route path=":filmId" element={<MovieDetails />} />
        </Route>
      </Routes>
    </div>
  );
};
