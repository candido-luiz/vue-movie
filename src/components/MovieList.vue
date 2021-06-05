<template>

    <div class="movie-grid">
        <div v-for="movie in moviesArray" :key="movie.id">
            <MovieCard :movie="movie"/>
        </div>
    </div>

</template>

<script>
import fetchOptions from '../fetchOptions';
import MovieCard from './MovieCard.vue'
export default {
    components:{
        MovieCard
    },

    data(){
        return{
            moviesArray: []
        }
    },

    created: async function(){
        let fetchedMovies = await fetchOptions.getMovieList();
        this.moviesArray = fetchedMovies;
        console.log(this.moviesArray)
    }
}
</script>

<style>

</style>