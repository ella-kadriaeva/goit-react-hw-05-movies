import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredits } from 'services/fetch';

export const useCast = () => {
  const { itemId } = useParams();
  const [credits, setCredits] = useState();
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCredits(itemId)
      .then(credits => {
        if (credits.length === 0) {
          setError('There is no cast information');
          return;
        }
        setCredits(credits);
      })
      .catch(error => {
        setError(error);
      });
  }, [itemId]);

  return { credits, error };
};
