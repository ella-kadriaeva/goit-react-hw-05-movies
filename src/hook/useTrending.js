import { useState, useEffect } from 'react';
import { fetchApi } from 'services/fetch';

export const useTrending = () => {
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchApi()
      .then(data => data.results)
      .then(movies => {
        setMovies([...movies]);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  return { movies, error };
};
