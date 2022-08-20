import { useState, useEffect } from 'react';
import css from './Movie.module.css';
import { Link, useSearchParams } from 'react-router-dom';
import SearchInput from 'components/SearchInput/SearchInput';
import { fetchApiByName } from 'services/fetch';
import MoviesList from 'components/MoviesList/MoviesList';

function Movie() {
  const [searchParams, setSearchParams] = useSearchParams({ query: '' });
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const formSubmit = value => {
    setSearchParams({ query: value });
  };
  useEffect(() => {
    const searchQuery = searchParams.get('query');
    if (searchQuery === '') {
      return;
    }

    fetchApiByName(searchQuery)
      .then(data => data.results)
      .then(movies => {
        setMovies(movies);
      })
      .catch(error => {
        setError(error);
      });
  }, [searchParams]);
  return (
    <>
      <div className={css.container}>
        <SearchInput onSubmit={formSubmit} />
        {error && <h1>{error.message}</h1>}
        {movies && <MoviesList movies={movies} />}
      </div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default Movie;
