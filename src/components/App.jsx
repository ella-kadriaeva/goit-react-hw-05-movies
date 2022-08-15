import Home from './Home/Home';
import Movie from './Movie/Movie';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import { MovieInfo } from 'pages/MovieInfo/MovieInfo';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="movies" element={<Movie />} />
          <Route path="movies/:itemId" element={<MovieInfo />}></Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
