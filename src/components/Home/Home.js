import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import css from './Home.module.css';
import { Link } from 'react-router-dom';
import fetchApi from 'services/fetch';
import Loader from 'components/Loader/Loader';
import PopularMovies from 'components/PopularMovies/PopularMovies';

export default function Home() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setStatus('pending');
    fetchMovie();
  }, []);

  const fetchMovie = () => {
    fetchApi()
      .then(data => data.results)
      .then(movies => {
        setMovies([...movies]);
        setStatus('resolved');
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
        {status === 'resolved' && <PopularMovies movies={movies} />}
      </main>
      <nav>
        <Link to="/about">Movie</Link>
      </nav>
    </>
  );
}
