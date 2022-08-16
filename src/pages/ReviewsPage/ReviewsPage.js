import css from './ReviewsPage.module.css';

export default function ReviewsPage({ reviews }) {
  const { results } = reviews;
  console.log(results);
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {results.length === 0 ? (
          <p className={css.text}>There are no reviews yet for this movie</p>
        ) : (
          results.map(({ id, author, content }) => (
            <li className={css.card} key={id}>
              <p className={css.text}>{author}:</p>
              <p className={css.textReview}>{content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
