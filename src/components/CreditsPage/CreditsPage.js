import css from './CreditsPage.module.css';
import PropTypes from 'prop-types';

export default function CreditsPage({ credits }) {
  const { cast } = credits;
  console.log(cast);
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {cast.map(({ id, character, profile_path, name }) => (
          <li className={css.card} key={id}>
            <img
              className={css.cardImg}
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : 'https://via.placeholder.com/500x750?text=Not+photo,+sorry!'
              }
              alt={character}
            />
            <p className={css.text}>Name: {name}</p>
            <p className={css.text}>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
CreditsPage.propTypes = {
  credits: PropTypes.array.isRequired,
};
