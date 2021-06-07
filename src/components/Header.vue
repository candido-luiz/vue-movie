<template>
  <header>
        <router-link :to="{name: 'home'}">
            <div class="home">MoView</div>
        </router-link>
        <div class="searchBar">
            <input type="text" name="searchMovie" id="searchMovie" placeholder="buscar filme" 
            v-model="movieToSearch">
            <button @click='searchForMovies' class="searchButton">Buscar</button>
        </div>
  </header>
</template>

<script>
export default {
    data(){
        return{
            movieToSearch: ''
        }
    },

    methods:{
        searchForMovies: function(){
            if(this.movieToSearch.trim()){
                this.$router.push({name: 'foundmovies', query: {name: this.movieToSearch}})
            }
            this.movieToSearch = '';
            
        }
    }
}
</script>

<style >
    header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #213e31;
    color: #fff;
    position: sticky;
    top: 0;
    padding: 15px;
    z-index: 2;
}
a{
    text-decoration: none;
}
.home{
    font-size: 24px;
    font-weight: bold;
    color: #fff;
}
#searchMovie{
    flex: 1;
    width: 100%;
    padding: 5px 7px;
    font-size: 18px;
    border: none;
    outline: none;
    background-color: #292727;
    color: #c7c2c2;
}
.searchBar{
    display: flex;
    max-width: 450px;
    width: 100%;  
    background: #424242;
    padding: 1px;

}
.searchButton{
    border: none;
    background-color: #313131;
    color: #fff;
    padding-right: 10px;
    padding-left: 10px;
    cursor: pointer;
}
.searchButton:hover{
    background-color: #696969;
}
</style>