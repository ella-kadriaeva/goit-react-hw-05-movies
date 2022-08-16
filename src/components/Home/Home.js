import { useState, useEffect } from 'react';
import css from './Home.module.css';
import { fetchApi } from 'services/fetch';
import MoviesList from 'components/MoviesList/MoviesList';
import { Link } from 'react-router-dom';

export default function Home() {
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

  return (
    <>
      <main className={css.container}>
        <h2 className={css.home__title}>Trending todey</h2>
        {error && <h1>{error.message}</h1>}
        {movies && <MoviesList movies={movies} />}
      </main>
      <nav>
        <Link to="/movies">Movie</Link>
      </nav>
    </>
  );
}
