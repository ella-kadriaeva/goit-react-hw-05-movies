import { Link, useLocation } from 'react-router-dom';
import css from './MoviesListItem.module.css';

export default function MoviesListItem({ id, title }) {
  const location = useLocation();
  return (
    <Link to={`${id}`} state={{ from: location }} className={css.movieItem}>
      {title}
    </Link>
  );
}
