import Home from './Home/Home';
import Movie from './Movie/Movie';
import Credits from './Credits/Credits';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import { MovieInfo } from 'pages/MovieInfo/MovieInfo';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movie />} />
          <Route path=":itemId" element={<MovieInfo />}>
            <Route path="credits" element={<Credits />} />
          </Route>
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};

export default App;
