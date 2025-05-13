const API_KEY =process.env.REACT_APP_API_KEY;

const requests={

    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language-en US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies:`/movie/top_rated?api_key=${API_KEY}&language-en US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=22`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchTvShow:`tv/popular?api_key=${API_KEY}&language-en US&page-1`
};

// const url = 'https://https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTM3ODg3Y2U5NTBhMjU3YjJmZjdjNzgxZjM5NDk1MiIsIm5iZiI6MTc0Njk5MDMxNC4xODEsInN1YiI6IjY4MjBmNGVhNGVkM2I0ZDkxYTRiNDFiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PF5sEriw_a5F0d5wMz1npsJMPqShqnROhTGImDUpbts'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));

export default requests;