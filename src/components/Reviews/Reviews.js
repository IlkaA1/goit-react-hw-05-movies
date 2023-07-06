import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchReviews } from 'api';
import css from './reviews.module.css';
import Notiflix from 'notiflix';

const Reviews = () => {
  const [reviews, setReviews] = useState();
  const { filmId } = useParams();

  useEffect(() => {
    const fetchApi = async filmId => {
      try {
        await fetchReviews(filmId).then(res => {
          if (res.data.results.length > 0) {
            setReviews(res.data.results);
          }
        });
      } catch ({ error }) {
        Notiflix.Notify.failure(error);
      }
    };

    if (filmId) {
      fetchApi(filmId);
    }
  }, [filmId]);

  return (
    <div className={css.details}>
      {reviews ? (
        <div>
          {reviews.map(review => (
            <div key={review.id}>
              <h2>Author:{review.author}</h2>
              <p>{review.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>There are no reviews for this movie</p>
      )}
    </div>
  );
};

export default Reviews;
