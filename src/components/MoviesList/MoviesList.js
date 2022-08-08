import React from 'react';
import css from './MoviesList.module.css';

export default function MoviesList({ movies }) {
  return (
    <ul className={css.movieList}>
      {movies.map(({ id, title }) => (
        <li key={id} className={css.movieItem}>
          {title}
        </li>
      ))}
    </ul>
  );
}
