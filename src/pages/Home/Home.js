import css from './Home.module.css';
import { useTrending } from 'hook/useTrending';
import MoviesList from 'components/MoviesList/MoviesList';

export default function Home() {
  const { movies, error } = useTrending();

  return (
    <>
      <h2 className={css.home__title}>Trending todey</h2>
      {error && <h1>{error.message}</h1>}
      {movies && <MoviesList movies={movies} />}
    </>
  );
}
