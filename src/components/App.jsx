import Home from './Home/Home';
import Movie from './Movie/Movie';
import Credits from './Credits/Credits';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import Reviews from 'components/Reviews/Reviews';
import NotFound from 'pages/NotFound/NotFound';
// Layout = lazy(() => import('./Layout/Layout'));
// Credits = lazy(() => import('./Credits/Credits'));
// Home = lazy(() => import('./Home/Home'));
// Movie = lazy(() => import('./Movie/Movie'));
// MovieInfo = lazy(() => import('pages/MovieInfo/MovieInfo'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movie />} />
            <Route path="/movies/:itemId" element={<MovieInfo />}>
              <Route path="credits" element={<Credits />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
