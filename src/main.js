import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Routes from './routes';

// Used for HTTP requests to the server
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

// Filters - Registered globally
Vue.filter('to-uppercase', value => {
  return value.toUpperCase();
});

Vue.filter('snippet', value => {
  // Use slice method on the string value to return only 100 characters starting at position 0
  return value.slice(0, 100) + '...';
});

// Custom directives - global
Vue.directive('rainbow', {
  // Lifecycle hook
  bind(el, binding, vnode) {
    el.style.color =
      '#' +
      Math.random()
        .toString()
        .slice(2, 8);
  }
});

Vue.directive('theme', {
  bind(el, binding, vnode) {
    if (binding.value === 'wide') {
      el.style.maxWidth = '1200px';
    } else if (binding.value === 'narrow') {
      el.style.maxWidth = '500px';
    }

    if (binding.arg === 'column') {
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});
