<template>
  <div id="app">
    <Header />
    <h1>Início do Projeto</h1>
    <MovieList />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import MovieList from './components/MovieList'

export default {
  name: 'App',
  components: {
    Header,
    MovieList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
