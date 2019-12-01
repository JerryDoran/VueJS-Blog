<template>
  <!-- Need to have everything written inside one root element -->
  <div>
    <add-blog></add-blog>
  </div>
</template>

<script>
// Import my components
import addBlog from './components/addBlog.vue';

export default {
  components: {
    // Register my components
    'add-blog': addBlog
  },
  data() {
    return {};
  },
  methods: {}
};
</script>



<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
}
</style>
