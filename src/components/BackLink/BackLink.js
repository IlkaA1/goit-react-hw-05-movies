import { useNavigate } from 'react-router-dom';
import css from './backLink.module.css';

export const BackLink = ({ to, children }) => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  return (
    <button onClick={back} className={css.button}>
      Go Back
    </button>
  );
};
