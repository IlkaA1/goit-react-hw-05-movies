import css from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className={css.header}>
      <nav className={css.navigation}>
        <NavLink to="/" className={css.button}>
          Home
        </NavLink>
        <NavLink to="/movies" className={css.button}>
          Movies
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
