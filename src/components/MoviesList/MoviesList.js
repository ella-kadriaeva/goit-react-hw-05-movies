import css from './MoviesList.module.css';
import MoviesListItem from '../MoviesListItem/MoviesListItem';
import PropTypes from 'prop-types';

export default function MoviesList({ movies }) {
  return (
    <ul className={css.movieList}>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <MoviesListItem id={id} title={title} />
        </li>
      ))}
    </ul>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
