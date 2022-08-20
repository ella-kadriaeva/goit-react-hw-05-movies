import css from './BackButton.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
export default function BackButton({ location }) {
  return (
    <button className={css.buttonBack} type="button">
      <Link className={css.buttonLink} to={location}>
        go back
      </Link>
    </button>
  );
}

BackButton.propTypes = {
  location: PropTypes.any.isRequired,
};
