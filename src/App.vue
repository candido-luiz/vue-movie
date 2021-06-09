<template>
  <div id="app">
    <Header />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app{
  overflow-x: hidden;
}
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
  /* manter o footer no bottom */
  position: relative;
  min-height: 100vh;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateX(2em);
}
.fade-enter-active, .fade-leave-active{
  transition: all 0.3s ease;
}
</style>
