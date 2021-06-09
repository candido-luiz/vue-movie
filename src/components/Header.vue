<template>

    <header>
        <div class="header-content">
            <nav>
                <router-link :to="{name: 'home'}">
                    <div class="home">MoView</div>
                </router-link>

                <router-link :to="{name: 'favorites'}">
                    <div class="favorites">Favoritos</div>
                </router-link>
            </nav>

            <div class="searchBar">
                <input type="text" name="searchMovie" id="searchMovie" placeholder="buscar filme" 
                v-model="movieToSearch">
                <button @click='searchForMovies' class="searchButton">Buscar</button>
            </div>
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
    justify-content: center;
    background-color: #213e31;
}
.header-content{
    max-width: 1300px;
    flex: 1;
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
nav{
    display: flex;
    align-items: baseline;
}
.home{
    font-size: 24px;
    font-weight: bold;
    color: #fff;
}
.favorites{
    font-size: 17px;
    margin-left: 20px;
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
@media screen and (max-width: 700px) {
    .searchBar{
        max-width: 280px;
    }
}
@media screen and (max-width: 530px) {
    .home{
        font-size: 18px;
    }
    .favorites{
        font-size: 14px;
        margin-left: 12px;
    }
}
@media screen and (max-width: 500px) {
    .searchBar{
        max-width: 200px;
        font-size: 14px;
    }
    #searchMovie{
        font-size: 14px;
    }
}
@media screen and (max-width: 380px) {
    .searchBar{
        max-width: 160px;
    }
    #searchMovie{
        font-size: 12px;
    }
    .searchButton{
        font-size: 10px;
    }
    .favorites{
        font-size: 12px;
        padding-right: 10px;
    }
}
</style>