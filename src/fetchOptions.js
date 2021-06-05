const URL_BASE = 'https://api.themoviedb.org/3/movie/popular?api_key='
const API_KEY = 'd18230a62c17fab4dab7a444673ab6b0'

const FETCH_URL = URL_BASE + API_KEY;

export default {
    getMovieList: async function(){
        let res = await fetch(FETCH_URL);
        let json = await res.json();
        let movieList = json.results;
        return movieList;
    }
} 