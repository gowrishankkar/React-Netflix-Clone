const API_KEY = "be43b051412ba9a63da713b243fdbaa4";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetFlixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/discover?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/discover?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovices: `/discover/discover?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/discover?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
