<template>
    <main>
        <div class="movie-grid">
            <div v-for="movie in moviesArray" :key="movie.id">
                <MovieCard :movie="movie"/>
            </div>
        </div>
    </main>

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
        // Busca os dados da TMDB API
        let fetchedMovies = await fetchOptions.getMovieList();
        this.moviesArray = fetchedMovies;
        console.log(this.moviesArray)
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