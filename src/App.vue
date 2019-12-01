<template>
  <!-- Need to have everything written inside one root element -->
  <div>
    <show-blogs></show-blogs>
    <!-- <add-blog></add-blog> -->
  </div>
</template>

<script>
// Import my components
import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';

export default {
  components: {
    // Register my components
    'add-blog': addBlog,
    'show-blogs': showBlogs
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito:400,600&display=swap');
body {
  margin: 0;
  font-family: 'Nunito', sans-serif;
}
</style>
