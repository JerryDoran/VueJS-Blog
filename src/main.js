import Vue from 'vue';
import App from './App.vue';
// import Ninjas from './Ninjas.vue';

// Registers the component globally
// Vue.component('ninjas', Ninjas);

// Create an event bus
export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
});
