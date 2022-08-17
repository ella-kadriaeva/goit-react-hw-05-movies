import css from './BackButton.module.css';
import { Link, useLocation } from 'react-router-dom';
export default function BackButton() {
  const location = useLocation();
  return (
    <button className={css.buttonBack} type="button">
      <Link className={css.buttonLink} to={location?.state?.from ?? '/'}>
        go back
      </Link>
    </button>
  );
}
