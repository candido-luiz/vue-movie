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
        moviePosterPath: function(){
            const POSTER_PATH_BASE = 'https://image.tmdb.org/t/p/w300';
            let posterPath = this.movie.poster_path;

            return POSTER_PATH_BASE + posterPath;
        },

        movieReleaseDate: function(){
            let releaseDate = this.movie.release_date.slice(0,4);
            return releaseDate;
        }
    }
}
</script>

<style>

</style>