// const API_KEY = '8ba51ca9b1ac445c77c0779168705c6a';

const apiReesult = (serchQvery, id) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmE1MWNhOWIxYWM0NDVjNzdjMDc3OTE2ODcwNWM2YSIsInN1YiI6IjY0OWQ3ODUxNWFiYTMyMDBlMmZlZGI1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.If54TaIwUfelY04KSYplJBOKH1rKkAhBHjGXCFZYxSA',
    },
  };

  if (id) {
    console.log(id);
    const result = fetch(
      `https://api.themoviedb.org/3/${serchQvery}/${id}?language=en-US`,
      options
    );

    return result;
  } else {
    const result = fetch(
      `https://api.themoviedb.org/3/${serchQvery}?language=en-US`,
      options
    );
    return result;
  }
};

export default apiReesult;
