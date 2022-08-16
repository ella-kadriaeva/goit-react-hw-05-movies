import { fetchReviews } from 'services/fetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewsPage from 'pages/ReviewsPage/ReviewsPage';

export default function Reviews() {
  const { itemId } = useParams();
  const [reviews, setReviews] = useState();
  const [error, setError] = useState('');

  useEffect(() => {
    fetchReviews(itemId)
      .then(reviews => {
        if (reviews.length === 0) {
          setError('There is no review information');
          return;
        }

        setReviews(reviews);
      })
      .catch(error => {
        setError(error);
      });
  }, [itemId]);

  return (
    <>
      {error && <h1>{error.message}</h1>}
      {reviews && <ReviewsPage reviews={reviews} />}
    </>
  );
}
