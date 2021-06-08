<template>
    <main>
        <div class="movie-grid">
            <div v-for="movie in favoriteMovies" :key="movie.id">
                <MovieCard :movie="movie"/>
            </div>
        </div>
    </main>
</template>

<script>
import MovieCard from './MovieCard.vue';

export default {
    
    components:{
        MovieCard
    },

    data(){
        return {
            favoriteMovies: []
        }
    },

    created: function(){
        let favoriteMoviesList = JSON.parse(localStorage.getItem('favoriteMoviesList'));
        this.favoriteMovies = favoriteMoviesList;
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