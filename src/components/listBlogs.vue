<template>
  <!-- Need to have everything written inside one root element -->
  <!-- <div v-theme:column="'wide'" id="show-blogs"> -->
  <div v-theme="'wide'" id="show-blogs">
    <h1>List of Blog Titles</h1>
    <input id="search-blog" type="text" v-model="search" placeholder="Search blogs" />
    <div v-for="blog in filteredBlogs" :key="blog" class="single-blog">
      <h2 v-rainbow>{{ blog.title | toUppercase }}</h2>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';
export default {
  data() {
    return {
      blogs: [],
      search: ''
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
  },
  computed: {},

  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color =
          '#' +
          Math.random()
            .toString()
            .slice(2, 8);
      }
    }
  },
  mixins: [searchMixin]
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

#search-blog {
  width: 50%;
  padding: 5px 5px;
  font-size: 1rem;
}
</style>
