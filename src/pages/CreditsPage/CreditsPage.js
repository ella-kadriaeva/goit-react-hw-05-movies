import css from './CreditsPage.module.css';

export default function CreditsPage({ credits }) {
  const { cast } = credits;

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {cast.map(({ id, character, profile_path, name }) => (
          <li className={css.card} key={id}>
            <img
              width="275px"
              height="400px"
              className={css.cardImg}
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300${profile_path}`
                  : 'https://via.placeholder.com/275x400?text=No+photo,+sorry!'
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
