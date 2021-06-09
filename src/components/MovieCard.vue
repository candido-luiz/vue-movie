<template>
        <div class="movieCard">

            <button v-if="!isFavorite" class="favoriteButton" @click="setFavorite">Favoritar</button>
            
            <button v-else class="desFavoriteButton" 
            @click="setFavorite(); emitRemovieFavorite()">Favorito !</button>

            <div class="moviePoster">
                <router-link  :to="{name: 'movie', params:{id: movie.id}}">
                    <img :src="moviePosterPath" alt="poster">
                </router-link>
            </div>

            <router-link :to="{name: 'movie', params:{id: movie.id}}">
                <div class="movieInfo">
                    <div>
                        <div class="movieInfo-title">{{movie.title}}</div>
                        <div class="movieInfo-release">{{movieReleaseDate}}</div>
                    </div>
                    <div class="movieInfo-vote">{{movie.vote_average}}</div>
                </div>
            </router-link>

        </div>
</template>

<script>
export default {
    props:{
        movie: Object
    },

    data(){
        return {
            isFavorite: false
        }
    },

    computed:{
        // Concatena a url base de uma imagem com o path do poster do objeto movie
        moviePosterPath: function(){
            const POSTER_PATH_BASE = 'https://image.tmdb.org/t/p/w300';
            let posterPath = this.movie.poster_path;

            return POSTER_PATH_BASE + posterPath;
        },

        movieReleaseDate: function(){
            // Retorna o ano de lançamento do filme
            let releaseDate = this.movie.release_date.slice(0,4);
            return releaseDate;
        }
    },
    //Inicializa o dado 'isFavorite' com true caso já tenha
    //sido favoritado em outras listas em que foi renderizado
    mounted: function(){

        if (this.isThisMovieInFavoriteList()){
            this.isFavorite = true;
        }
    },

    methods: {
        //Seta ou Remove o filme como favorito
        setFavorite: function(){
            this.isFavorite = !this.isFavorite;
        },
        //Busca e Retorna do localStorage, a lista de filmes favoritos
        getFavoritMovieList: function(localStorageItem){
            let favoriteMoviesList = []
            if(localStorageItem){
                favoriteMoviesList = JSON.parse(localStorageItem);
            } 

            return  favoriteMoviesList;
        },
        //Verifica se o filme já está na lista de favoritos
        isThisMovieInFavoriteList: function(){
            let favoriteMoviesList = this.getFavoritMovieList(localStorage.getItem('favoriteMoviesList'));
            let isThisMovieInFavoriteList = favoriteMoviesList.some((favoriteMovie) => {
                return favoriteMovie.id == this.movie.id;
            });

            return isThisMovieInFavoriteList;
        },

        emitRemovieFavorite: function(){
            this.$emit('removeCardFromFavoriteList', {id: this.movie.id});
        }
    },

    watch: {
        //Observa as mudanças de estado de 'isFavorite' e adiciona
        //ou remove o filme da lista de favoritos
        isFavorite: function(newIsFavoriteStatus){

            let favoriteMoviesList = this.getFavoritMovieList(localStorage.getItem('favoriteMoviesList'));
            
            if (newIsFavoriteStatus == true){
                //Verifica se o filme não está na lista de favoritos e o adiciona
                if(!this.isThisMovieInFavoriteList()){
                    favoriteMoviesList.push(this.movie);
                }
                
            }
            else{
                //Remove o filme da lista de favoritos
                let filteredFavoriteMovieList = favoriteMoviesList.filter((favoriteMovie) => {
                    return favoriteMovie.id != this.movie.id
                })

                favoriteMoviesList = filteredFavoriteMovieList;
            }
            localStorage.setItem('favoriteMoviesList', JSON.stringify(favoriteMoviesList));
        }
    }
}
</script>

<style scoped>
.movieCard{
    position: relative;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transform: scale(0.9);
    transition: all 0.3s;
}
.movieCard:hover{
    transform: scale(0.95);
}
.movieCard:hover .movieInfo,
.movieCard:hover .favoriteButton,
.movieCard:hover .desFavoriteButton{
    opacity: 0.9;
}
.favoriteButton, .desFavoriteButton{
    position: absolute;
    top: 7px;
    right: 7px;
    padding: 4px;
    outline: none;
    color: #ffffff;
    font-weight: bold;
    opacity: 0.2;
}
.favoriteButton{
    border: 1px solid #f5f5f5;
    background-color: #1b1b1b80;
}
.desFavoriteButton{
    border: 1px solid #ffffff;
    background-color: #dac400e1;
    color: #000000;

}
.moviePoster{
    width: 100%;
    height: 100%;
}
.moviePoster img{
    width: 100%;
    height: 100%;
}
.movieInfo{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    background-color: #292727;
    padding: 8px;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.1;
    transition: all 0.3s;
}
.movieInfo-title, .movieInfo-release{
    color: #fff;
    font-size: 18px;
    font-weight: bold;
}
.movieInfo-vote{
    color: #fff;
    font-size: 20px;
    padding: 9px;
    margin-right: 5px;
    border: 1px solid #fff;
}
@media screen and (max-width: 800px) {
    .movieInfo, .favoriteButton{
        opacity: 0.7;
    }
}
</style>