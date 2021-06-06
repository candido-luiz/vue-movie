<template>
    <main class="movieBackDrop" 
    :style="{ backgroundImage: 'url('+ movieBackDropPath +')' }">
        <div class="movieDetails">
            <div class="movie-poster">
                <img :src="moviePosterPath" :alt="movie.title">
            </div>
            <div class="movie-info">
                <div class="info-title">{{ movie.title }}</div>
                <div class="info-tagline">{{ movie.tagline }}</div>
                <div class="info-overview">{{ movie.overview }}</div>
                <div class="info-genres">{{ movieGenres }}</div>
            </div>
        </div>
    </main>
</template>

<script>
import fetchOptions from '../fetchOptions';

export default {
    data(){
        return{
            movie: {}
        }
    },

    computed: {
        //concatena a url base de uma imagem com o path do backdrop, do objeto movie
        movieBackDropPath: function(){
            const BACKDROP_PATH_BASE = 'https://image.tmdb.org/t/p/w1280';
            let backDropPath = this.movie.backdrop_path;
            
            return BACKDROP_PATH_BASE + backDropPath;
        },

        //Concatena url base de uma imagem com o path do poster, do objeto movie
        moviePosterPath: function(){
            const POSTER_PATH_BASE = 'https://image.tmdb.org/t/p/w300';
            let posterPath = this.movie.poster_path;

            return POSTER_PATH_BASE + posterPath;
        },
        // Retorna uma string com os gêneros do objeto movie
        movieGenres: function(){
            let genresArray = this.movie.genres;
            let genresTypes = genresArray.map((genre) => {
                return genre.name
            });

            return genresTypes.join(', ');
        }
    },

    // Busca detalhes do filme pelo id, passado por parâmetro
    created: async function(){
        let idParam = this.$route.params.id;
        let fetchedMovie = await fetchOptions.getMovieDetails(idParam);
        this.movie = fetchedMovie;
    }
}
</script>

<style scoped>
.movieBackDrop{
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 600px;
    display: flex;
    justify-content: center;
}
.movieDetails{
    flex: 1;
    display: flex;
    max-width: 1200px;
    height: 480px   ;
    padding: 15px;
    margin-top: 15px;
    background-color: #1c1c1c7a;
    color: #fff;
}
.movie-poster{
    flex: 1;
}
.movie-info{
    flex: 3;
    padding-left: 10px;
}
.info-title{
    margin-top: 25px;
    font-size: 38px;
    font-weight: bold;
}
.info-tagline{
    font-size: 14px;
}
.info-overview{
    max-width: 700px;
    margin-top: 15px;
    font-size: 19px;
    line-height: 1.4;
}
.info-genres{
    margin-top: 15px;
    font-size: 18px;
}
</style>