import { Link, useLocation } from 'react-router-dom';
import css from './MoviesListItem.module.css';
import PropTypes from 'prop-types';
export default function MoviesListItem({ id, title }) {
  const location = useLocation();

  return (
    <li>
      <Link
        to={`/movies/${id}`}
        state={{ from: location }}
        className={css.movieItem}
      >
        {title}
      </Link>
    </li>
  );
}
MoviesListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
