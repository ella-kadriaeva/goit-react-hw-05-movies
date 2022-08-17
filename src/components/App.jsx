import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import Loader from 'components/Loader/Loader';
const Layout = lazy(() => import('./Layout/Layout'));
const Credits = lazy(() => import('../pages/Credits/Credits'));
const Home = lazy(() => import('pages/Home/Home'));
const Movie = lazy(() => import('components/Movie/Movie'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movie />} />
            <Route path="movies/:itemId" element={<MovieInfo />}>
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
