<template>
    <main v-if="foundMovies.length > 0">
        <h1 class="h1">Filmes encontrados com ' {{ this.$route.query.name }} '</h1>
        <div class="movie-grid">
            <div v-for="movie in foundMovies" :key="movie.id">
                <MovieCard :movie="movie"/>
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
    margin-left: 15px;
}
.movie-grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 20px;
}
.notFound{
    color: #fff;
    text-align: center;
    margin-top: 40px;
}
</style>