import { useNavigate } from 'react-router-dom';

export const BackLink = ({ to, children }) => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  return <button onClick={back}>Go Back</button>;
};
