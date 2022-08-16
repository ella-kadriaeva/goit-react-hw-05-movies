import css from './MoviePage.module.css';
import { Link, useLocation } from 'react-router-dom';
import { formatDate } from 'services/date';

export default function MoviePage({ movieInfo }) {
  const {
    genres,
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
  } = movieInfo;
  const genresInfo = genres.map(genre => genre.name).join(', ');
  const location = useLocation();
  const time = formatDate(release_date);
  return (
    <main>
      <div className={css.container}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_title}
        />
        <div className={css.meta}>
          <h2 className={css.title}>
            {original_title} ({time})
          </h2>

          <p className={css.text}>Use score: {vote_average}</p>
          <p className={css.text}>Overview:</p>
          <p className={css.text}>{overview}</p>
          <p className={css.text}>{genresInfo}</p>
        </div>
      </div>
      <div className={css.box}>
        <h3 className={css.text}>Additional information</h3>
        <ul>
          <li>
            <Link to="credits" state={location.state}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={location.state}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
