import { useState, useEffect } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import MoviePage from 'pages/MoviePage/MoviePage';
import { fetchMovieInfo } from 'services/fetch';

export const MovieInfo = () => {
  const { itemId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMovieInformation(itemId);
  }, [itemId]);

  const fetchMovieInformation = itemId => {
    fetchMovieInfo(itemId)
      .then(movieInfo => {
        setMovieInfo(movieInfo);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
      });
  };

  return (
    <>
      <main>
        {error && <h1>{error.message}</h1>}
        {status === 'resolved' && <MoviePage movieInfo={movieInfo} />}

        <Outlet />
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
};
