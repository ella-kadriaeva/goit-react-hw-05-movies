import Home from './Home/Home';
import Movie from './Movie/Movie';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

export const App = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};

export default App;
