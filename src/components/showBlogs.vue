<template>
  <!-- Need to have everything written inside one root element -->
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <div v-for="blog in blogs" :key="blog" class="single-blog">
      <h2 v-rainbow>{{ blog.title }}</h2>
      <article>{{ blog.body }}</article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: []
    };
  },
  methods: {},
  // Life cycle hook
  created() {
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then(data => {
      // Get first 10 elements from the body array that is return from the URL and store them
      // in the blogs array.
      this.blogs = data.body.slice(0, 10);
    });
  }
};
</script>

<style>
#show-blogs {
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
}

.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
