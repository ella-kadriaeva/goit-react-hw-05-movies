import css from './CreditsPage.module.css';

export default function CreditsPage({ credits }) {
  const { cast } = credits;
  const { profile_path, job, name } = cast;

  return (
    <div className={css.container}>
      <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} />
      <p>{job}</p>
      <p>{name}</p>
    </div>
  );
}
