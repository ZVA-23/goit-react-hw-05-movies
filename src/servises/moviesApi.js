import axios from 'axios';

const KEY = '6a5fe75f0f7a68bb29acb6c57498ea74';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchTrendingMovies() {
  const response = await axios(`trending/movie/day`, {
    params: {
      api_key: KEY,
      size: 20,
    },
  });
  return response.data.results;
}

export async function fetchMoviesById(movieId) {
  const response = await axios(`/movie/${movieId}`, {
    params: {
      api_key: KEY,
    },
  });
  return response.data;
}

export async function fetchMoviesByQuery(query) {
  const response = await axios(`/search/movie`, {
    params: {
      api_key: KEY,
      size: 20,
      query,
    },
  });
  return response.data.results;
}

export async function fetchMovieCast(movieId) {
  const response = await axios(`/movie/${movieId}/credits`, {
    params: {
      api_key: KEY,
    },
  });
  return response.data.cast;
}

export async function fetchMovieReviews(movieId) {
  const response = await axios(`/movie/${movieId}/reviews`, {
    params: {
      api_key: KEY,
    },
  });
  return response.data.results;
}
