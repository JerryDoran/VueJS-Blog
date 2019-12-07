<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.content }}</article>
    <p>Author: {{ blog.author }}</p>
    <h3>Categories:</h3>
    <ul>
      <li v-for="category in blog.categories" :key="category">{{ category }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  // Lifecycle hook
  created() {
    this.$http
      .get('https://vue-blog-85f59.firebaseio.com/posts/' + this.id + '.json')
      .then(data => {
        return data.json();
      })
      .then(data => {
        this.blog = data;
        console.log(data);
      });
  }
};
</script>

<style scoped>
#single-blog {
  width: 90%;
  max-width: 960px;
  margin: 0 auto;
}
</style>
