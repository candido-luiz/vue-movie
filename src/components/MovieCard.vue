<template>
    <div class="movieCard">
        <div class="moviePoster">
            <img :src="moviePosterPath" alt="poster">
        </div>
        <div class="movieInfo">
            <div class="movieInfo-title">{{movie.title}}</div>
            <div class="movieInfo-release">{{movieReleaseDate}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        movie: Object
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
.movieCard:hover .movieInfo{
    opacity: 0.9;
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
</style>