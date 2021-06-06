<template>
  <div id="app">
    <Header />
    <h1>Início do Projeto</h1>
    <MovieList />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import MovieList from './components/MovieList';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    MovieList,
    Footer
  }
}
</script>

<style>
*{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background-color: #1c1c1c;
}
</style>
