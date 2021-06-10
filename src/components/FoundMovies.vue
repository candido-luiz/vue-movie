<template>
    <main v-if="foundMovies.length > 0">
        <h1 class="h1">Filmes encontrados com ' {{ this.$route.query.name }} '</h1>
        <div class="container">
            <div class="movie-grid">
                <div v-for="movie in foundMovies" :key="movie.id">
                    <MovieCard :movie="movie"/>
                </div>
            </div>
        </div>
    </main>

    <main v-else>
        <h1 class="notFound">
            Nenhum filme encontrado com ' {{ this.$route.query.name }} '
        </h1>
    </main>
</template>

<script>
import MovieCard from './MovieCard';

export default {

    components:{
        MovieCard
    },

    data(){
        return{
            foundMovies: null
        }
    },

    watch: {
        //Esse watcher verifica quando uma alteração é feita na query
        //passada na url, e caso ocorra, realiza a busca de novos filmes
        '$route': async function(to, from){
            if(to.query.name !== from.query.name){
                let movies = JSON.parse(localStorage.getItem('movies'));
                this.foundMovies = this.filterMovies(movies)
            }
            
        }
    },

    created: function(){
        let movies = JSON.parse(localStorage.getItem('movies'));
        this.foundMovies = this.filterMovies(movies)
    },

    methods: {
        //Esse método filtra os filmes, retornando aqueles que tem título em
        //comum com a query vinda do buscador
        filterMovies: function(movies){
            let movieNamePattern = new RegExp(this.$route.query.name, 'i');
            let filteredMovies = movies.filter((movie) => {
                return movieNamePattern.test(movie.title);
            })
            return filteredMovies;
        }
    }
}
</script>

<style scoped>
.h1{
    margin-top: 25px;
    color: #fff;
    text-align: center;
}
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
    margin-bottom: 40px;
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
    .h1{
        font-size: 24px;
    }
    .notFound{
        font-size: 24px
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