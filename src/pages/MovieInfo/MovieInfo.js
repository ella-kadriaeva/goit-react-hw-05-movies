import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import MoviePage from 'pages/MoviePage/MoviePage';
import Loader from 'components/Loader/Loader';
import { fetchMovieInfo } from 'services/fetch';

export const MovieInfo = () => {
  const { itemId } = useParams();
  console.log(itemId);
  const [movieInfo, setMovieInfo] = useState({});
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    setStatus('pending');

    fetchMovieInformation(itemId);
  }, [itemId]);

  const fetchMovieInformation = itemId => {
    fetchMovieInfo(itemId)
      .then(movieInfo => {
        setMovieInfo(movieInfo);
        setStatus('resolved');
      })
      .catch(error => {
        setStatus('rejected');
        setError(error);
      });
  };
  return (
    <>
      <main>
        {status === 'pending' && <Loader />}
        {status === 'rejected' && <h1>{error.message}</h1>}
        {status === 'resolved' && <MoviePage movieInfo={movieInfo} />}
      </main>
      <nav>
        <Link to="/home">Home</Link>
      </nav>
    </>
  );
};
