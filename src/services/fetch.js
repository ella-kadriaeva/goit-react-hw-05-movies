export const API_KEY = '250f014fd6a936550e378176122f5d39';
const BASE_URL = 'https://api.themoviedb.org/3';
// const searchParams = new URLSearchParams({
//   media_type: 'movie',
//   time_window: 'week',
// });
export default function fetchApi() {
  const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en&page=1`;
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`There are no images for your request`));
  });
}
// https://api.themoviedb.org/3/trending/movie/day?api_key=250f014fd6a936550e378176122f5d39&language=en&page=1
