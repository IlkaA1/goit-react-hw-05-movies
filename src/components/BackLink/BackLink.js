import { Link } from 'react-router-dom';
import css from './backLink.module.css';

export const BackLink = ({ to, children }) => {
  return (
    <Link className={css.button} to={to}>
      Go Back
      {children}
    </Link>
  );
};
