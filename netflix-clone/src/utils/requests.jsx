const API_KEY =process.env.REACT_APP_API_KEY;

const requests={

    FetchTrending:`/trending/all/week?api_key=${API_KEY}&language-en US`,
    FetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    FetchTopRatedMovies:`/movie/top_rated?api_key=${API_KEY}&language-en US`,
    FetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    FetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    FetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=22`,
    FetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    FetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
    FetchTvShow:`tv/popular?api_key=${API_KEY}&language-en US&page-1`
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