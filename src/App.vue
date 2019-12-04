<template>
  <!-- Need to have everything written inside one root element -->
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <!-- <show-blogs></show-blogs> -->
    <!-- <list-blogs></list-blogs> -->
    <!-- <add-blog></add-blog> -->
  </div>
</template>

<script>
// Import my components
import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';
import listBlogs from './components/listBlogs.vue';
import header from './components/header.vue';

export default {
  components: {
    // Register my components
    'add-blog': addBlog,
    'show-blogs': showBlogs,
    'list-blogs': listBlogs,
    'app-header': header
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
