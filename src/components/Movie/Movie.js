// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import css from './Movie.module.css';
import { Link } from 'react-router-dom';
import SearchInput from 'components/SearchInput/SearchInput';
import Loader from '../Loader/Loader';
import { fetchApiByName } from 'services/fetch';
import MoviesList from 'components/MoviesList/MoviesList';

function Movie() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const formSubmit = newQuery => {
    if (newQuery === searchQuery) {
      return;
    }
    setSearchQuery(newQuery);
  };
  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    setStatus('pending');
    fetchMovie(searchQuery);
  }, [searchQuery]);

  const fetchMovie = searchQuery => {
    fetchApiByName(searchQuery)
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
        <SearchInput onSubmit={formSubmit} />

        {status === 'pending' && <Loader />}
        {status === 'rejected' && <h1>{error.message}</h1>}
        {status === 'resolved' && <MoviesList movies={movies} />}
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default Movie;
