import CreditsPage from 'pages/CreditsPage/CreditsPage';
import { useCast } from 'hook/useCast';

export default function Credits() {
  const { error, credits } = useCast();
  return (
    <>
      {error && <h1>{error.message}</h1>}
      {credits && <CreditsPage credits={credits} />}
    </>
  );
}
