import css from './MoviesList.module.css';
import MoviesListItem from '../MoviesListItem/MoviesListItem';
import PropTypes from 'prop-types';

export default function MoviesList({ movies }) {
  return (
    <ul className={css.movieList}>
      {movies.map(({ id, title }) => (
        <MoviesListItem key={id} id={id} title={title} />
      ))}
    </ul>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
