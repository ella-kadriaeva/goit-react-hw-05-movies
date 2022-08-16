import { fetchCredits } from 'services/fetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import CreditsPage from 'pages/CreditsPage/CreditsPage';

export default function Credits() {
  const { itemId } = useParams();
  console.log(itemId);
  const [credits, setCredits] = useState();
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCredits(itemId)
      .then(credits => {
        if (credits.length === 0) {
          setError('There is no cast information');
          return;
        }
        setCredits(credits);
        console.log(credits);
      })
      .catch(error => {
        setError(error);
      });
  }, [itemId]);

  return (
    <>
      {error && <h1>{error.message}</h1>}
      {credits && <h1>++</h1>}
      {/* <CreditsPage credits={credits} /> */}
    </>
  );
}