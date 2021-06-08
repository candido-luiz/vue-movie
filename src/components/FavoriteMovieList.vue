<template>
    <main class="container" v-if="favoriteMovies.length > 0">
        <div class="movie-grid">
            <div v-for="movie in favoriteMovies" :key="movie.id">
                <MovieCard 
                :movie="movie"
                @removeCardFromFavoriteList="removeCard($event)"/>
            </div>
        </div>
    </main>

    <main v-else>
        <h1 class="notFound">
            Nenhum filme na lista de favoritos
        </h1>
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
            favoriteMovies: null
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
.notFound{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    height: calc(100vh - 90px);
}

@media screen and (max-width: 1100px) {
    .movie-grid{
        grid-template-columns: 1fr 1fr 1fr;
    }
}
@media screen and (max-width: 700px) {
    .movie-grid{
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        padding: 0 15px;
    }
    .notFound{
        font-size: 24px;
    }
}
@media screen and (max-width: 510px) {
    .movie-grid{
        grid-template-columns: 1fr;
        justify-items: center;
        padding: 0 15px;
    }
}
@media screen and (max-width: 425px) {
    .notFound{
        font-size: 18px;
    }
}
</style>