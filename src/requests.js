const API_KEY = "be43b051412ba9a63da713b243fdbaa4";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetFlixOriginals: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchComedyMovies: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchHorrorMovies: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchRomanceMovices: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchDocumentaries: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
};

export default requests;
