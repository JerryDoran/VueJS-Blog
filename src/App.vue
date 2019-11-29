<template>
  <!-- Need to have everything written inside one root element -->
  <div>
    <app-header
      v-bind:title="title"
      v-on:changeTitle="updateTitle($event)"
    ></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Ninjas from './components/Ninjas.vue';

export default {
  components: {
    // Register components
    'app-header': Header,
    'app-footer': Footer,
    'app-ninjas': Ninjas
  },
  data() {
    return {
      ninjas: [
        { name: 'Ryu', specialty: 'Vue Components', show: false },
        { name: 'Yoshi', specialty: 'HTML Wizardry', show: false },
        { name: 'Mario', specialty: 'Click Events', show: false },
        { name: 'Luigi', specialty: 'Conditionals', show: false },
        { name: 'Wario', specialty: 'Webpack', show: false },
        { name: 'Bowser', specialty: 'Data Diggin', show: false }
      ],
      title: 'Vue Ninjas'
    };
  },
  methods: {
    updateTitle: function(updatedTitle) {
      this.title = updatedTitle;
    }
  }
};
</script>

// Need to add the scoped key word to style each component's tags separately
<style scoped></style>
