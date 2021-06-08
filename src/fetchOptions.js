const URL_BASE = 'https://api.themoviedb.org/3/movie/popular?api_key='
const API_KEY = 'd18230a62c17fab4dab7a444673ab6b0'

const FETCH_MOVIELIST_URL = URL_BASE + API_KEY;

export default {
    // Retorna um Array contendo os filmes Populares da tmdb API
    getMovieList: async function(){
        try {
            let res = await fetch(FETCH_MOVIELIST_URL);
            let json = await res.json();
            let movieList = json.results;
        
            return movieList;

        } catch (error) {
            console.error(error)
        }
        
    },

    // Retorna um objeto com os detalhes de um filme, através de um id
    getMovieDetails: async function(idParam){
        const MOVIE_URL_BASE = 'https://api.themoviedb.org/3/movie/'
        let fetchMovieUrl = `${MOVIE_URL_BASE}${idParam}?api_key=${API_KEY}`;
        try {
            let res = await fetch(fetchMovieUrl);
            let json = await res.json();

            return json;

        } catch (error) {
            console.error(error);
        }
        
        
    }
} 