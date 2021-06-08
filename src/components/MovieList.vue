<template>
    <main class="container" v-if="moviesArray">
        <div class="movie-grid">
            <div v-for="movie in moviesArray" :key="movie.id">
                <MovieCard :movie="movie"/>
            </div>
        </div>
    </main>

    <LoadingScreen v-else-if="!fetchError" />

    <ErrorMessage v-else />

</template>

<script>

import fetchOptions from '../fetchOptions';
import MovieCard from './MovieCard.vue';
import LoadingScreen from './LoadingScreen.vue';
import ErrorMessage from './ErrorMessage'

export default {
    components:{
        MovieCard,
        LoadingScreen,
        ErrorMessage
    },

    data(){
        return{
            moviesArray: null,
            fetchError: false
        }
    },

    created: async function(){
        // Busca os dados da TMDB API
        let fetchedMovies = await fetchOptions.getMovieList();

        if(fetchedMovies){
            this.moviesArray = fetchedMovies;
            localStorage.setItem('movies', JSON.stringify(fetchedMovies))
        } else{
            this.fetchError = true;
        }
        
    }
}
</script>

<style scoped>
.container{
    justify-content: center;
    display: flex;
}
.movie-grid{
    max-width: 1300px;
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 20px;
}
</style>