import axios from 'axios';

const API_KEY = '8ba51ca9b1ac445c77c0779168705c6a';

export const apiReesult = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US`
  );
  return response;
};

export const fetchArticlesWithQuery = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return await response;
};

export const fetchCast = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );

  return response;
};

export const fetchReviews = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );

  return response;
};

export const fetchSearchFilm = async search => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${API_KEY}&language=en-US`
  );

  return response;
};
