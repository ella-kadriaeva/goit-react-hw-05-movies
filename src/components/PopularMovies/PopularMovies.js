import React from 'react';
import css from './PopularMovies.module.css';

export default function PopularMovies({ movies }) {
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
