<template>
  <!-- Need to have everything written inside one root element -->
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer v-bind:title="title"></app-footer>
    <form-helper>
      <div slot="form-header">
        <h3>This is the title of the form</h3>
        <p>Info about the form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="Name..." required />
        <input type="password" placeholder="Password..." required />
        <p>Info about the form</p>
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Ninjas from './components/Ninjas.vue';
import formHelper from './components/formHelper.vue';

export default {
  components: {
    // Register components
    'app-header': Header,
    'app-footer': Footer,
    'app-ninjas': Ninjas,
    'form-helper': formHelper
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
      title: 'Vue Ninjas',
      slotTitle: 'I am a dynamic slot title'
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
