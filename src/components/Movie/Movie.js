// import { useState } from 'react';
// import PropTypes from 'prop-types';
import React from 'react';
// import css from './Home.module.css';
import { Link } from 'react-router-dom';

function Movie() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default Movie;
