import axios from 'axios';

const API_KEY = '8ba51ca9b1ac445c77c0779168705c6a';
const BASE_URL = 'https://api.themoviedb.org/3';

export const apiReesult = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=en-US`
  );
  return response;
};

export const fetchArticlesWithQuery = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return await response;
};

export const fetchCastOrReviews = async (id, query) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/${query}?api_key=${API_KEY}&language=en-US`
  );

  return response;
};

export const fetchSearchFilm = async search => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?query=${search}&api_key=${API_KEY}&language=en-US`
  );

  return response;
};
