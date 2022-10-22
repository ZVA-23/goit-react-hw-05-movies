import axios from 'axios';

const KEY = '6a5fe75f0f7a68bb29acb6c57498ea74';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchTrendingMovies() {
  const response = await axios('trending/movie/day', {
    params: {
      api_key: KEY,
      size: 20,
    },
  });
  return response.data.results;
}
