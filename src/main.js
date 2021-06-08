import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import FoundMovies from './components/FoundMovies';
import FavoriteMovieList from './components/FavoriteMovieList';

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: MovieList
    },

    {
      path: '/movie/:id',
      name: 'movie',
      component: MovieDetails
    },

    {
      path: '/movie',
      name:'foundmovies',
      component: FoundMovies,
    },

    {
      path: '/favorites',
      name: 'favorites',
      component: FavoriteMovieList
    }
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
