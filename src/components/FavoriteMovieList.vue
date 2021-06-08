<template>
    <main>
        <div class="movie-grid">
            <div v-for="movie in favoriteMovies" :key="movie.id">
                <MovieCard 
                :movie="movie"
                @removeCardFromFavoriteList="removeCard($event)"/>
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

    //Busca os filmes favoritos do localStora e inicializa o 'favoriteMovies'
    created: function(){
        let favoriteMoviesList = JSON.parse(localStorage.getItem('favoriteMoviesList'));
        this.favoriteMovies = favoriteMoviesList;
    },

    methods: {
        //Ao receber uma emissao de evento do componente MovieCard, remove
        //o filme da lista de filmes favoritos, retirando-o da tela
        removeCard: function($event){
            let filteredFavoriteMovies = this.favoriteMovies.filter((movie) => {
                return movie.id != $event.id;
            })
            this.favoriteMovies = filteredFavoriteMovies;

            //Atualiza a lista de filmas armazenada no localStorage
            localStorage.setItem('favoriteMoviesList', JSON.stringify(filteredFavoriteMovies));
        }
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