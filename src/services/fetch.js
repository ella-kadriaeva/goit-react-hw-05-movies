export const API_KEY = '250f014fd6a936550e378176122f5d39';
const BASE_URL = 'https://api.themoviedb.org/3';

export function fetchApi() {
  const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en&page=1`;
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`There are no images for your request`));
  });
}

export function fetchApiByName(searchQuery) {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&include_adult=false&page=1&language=en`;
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`There are no images for your request`));
  });
}
export function fetchMovieInfo(movie_id) {
  const url = `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en`;
  return fetch(url).then(response => {
    if (response.ok) {
      console.log(response);
      return response.json();
    }
    return Promise.reject(new Error(`There are no images for your request`));
  });
}
