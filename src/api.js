const API_KEY = '8ba51ca9b1ac445c77c0779168705c6a';

export const apiReesult = async () => {
  const result = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US`
  );

  return result;
};

export const apiFilmById = async id => {
  const result = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );

  return result;
};

// export default { apiReesult, apiFilmById };
