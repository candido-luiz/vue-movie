<template>
    <main v-if="moviesArray">
        <div class="movie-grid">
            <div v-for="movie in moviesArray" :key="movie.id">
                <MovieCard :movie="movie"/>
            </div>
        </div>
    </main>

    <LoadingScreen v-else />

</template>

<script>
import fetchOptions from '../fetchOptions';
import MovieCard from './MovieCard.vue';
import LoadingScreen from './LoadingScreen.vue';

export default {
    components:{
        MovieCard,
        LoadingScreen
    },

    data(){
        return{
            moviesArray: null
        }
    },

    created: async function(){
        // Busca os dados da TMDB API
        let fetchedMovies = await fetchOptions.getMovieList();
        this.moviesArray = fetchedMovies;
        localStorage.setItem('movies', JSON.stringify(fetchedMovies))
    }
}
</script>

<style scoped>
.movie-grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 20px;
}
</style>