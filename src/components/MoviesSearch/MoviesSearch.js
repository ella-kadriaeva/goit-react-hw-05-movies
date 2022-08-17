import { useState, useEffect } from 'react';
import css from './MoviesSearch.module.css';
import SearchInput from 'components/SearchInput/SearchInput';
import { fetchApiByName } from 'services/fetch';
import MoviesList from 'components/MoviesList/MoviesList';

export const MoviesSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
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
    fetchApiByName(searchQuery)
      .then(data => data.results)
      .then(movies => {
        setMovies([...movies]);
      })
      .catch(error => {
        setError(error);
      });
  }, [searchQuery]);

  return (
    <div className={css.container}>
      <SearchInput onSubmit={formSubmit} />
      {error && <h1>{error.message}</h1>}
      {movies && <MoviesList movies={movies} />}
    </div>
  );
};
