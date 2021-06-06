import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

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
      path: '/:id',
      name: 'movie',
      component: MovieDetails
    }
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
