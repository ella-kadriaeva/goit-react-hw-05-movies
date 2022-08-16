import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import css from './Home.module.css';

import { fetchApi } from 'services/fetch';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
export default function Home() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setStatus('pending');
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    fetchApi()
      .then(data => data.results)
      .then(movies => {
        setMovies([...movies]);
        setStatus('resolved');

        if (movies) {
          return <Navigate to="movies/movieId" replace />;
        }
      })
      .catch(error => {
        setStatus('rejected');
        setError(error);
      });
  };

  return (
    <>
      <main className={css.container}>
        <h2 className={css.home__title}>Trending todey</h2>
        {status === 'pending' && <Loader />}
        {status === 'rejected' && <h1>{error.message}</h1>}
        {status === 'resolved' && <MoviesList movies={movies} />}
      </main>
      <nav>
        <Link to="/movie">Movie</Link>
      </nav>
    </>
  );
}
