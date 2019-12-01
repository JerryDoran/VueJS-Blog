<template>
  <!-- Need to have everything written inside one root element -->
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required />
      <label>Blog Content:</label>
      <textarea rows="10" v-model.lazy="blog.content"></textarea>
    </form>
    <div v-if="submitted">
      <h3>Thanks for submitting your post</h3>
    </div>
    <div id="checkboxes">
      <label>Ninjas</label>
      <input type="checkbox" value="ninjas" v-model="blog.categories" />
      <label>Wizards</label>
      <input type="checkbox" value="wizards" v-model="blog.categories" />
      <label>Mario</label>
      <input type="checkbox" value="mario" v-model="blog.categories" />
      <label>Luigi</label>
      <input type="checkbox" value="luigi" v-model="blog.categories" />
    </div>
    <label>Author</label>
    <select class="select-author" v-model="blog.author">
      <option v-for="author in authors" :key="author">{{ author }}</option>
    </select>
    <button class="btn-blog" v-on:click.prevent="postBlog">Add Blog</button>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p class="light-text">
        <span class="normal-text">Content:</span>
      </p>
      <p>{{ blog.content }}</p>
      <p>Blog Categories</p>
      <ul>
        <li v-for="category in blog.categories" :key="category">
          {{ category }}
        </li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        author: ''
      },
      authors: ['The Net Ninja', 'Angular Avenger', 'Vue Vindicator'],
      submitted: false
    };
  },
  methods: {
    postBlog: function() {
      this.$http
        .post('http://jsonplaceholder.typicode.com/posts', {
          title: this.blog.title,
          body: this.blog.content,
          userId: 1
        })
        .then(data => {
          console.log(data);
          this.submitted = true;
        });
    }
  }
};
</script>

<style>
#add-blog * {
  box-sizing: border-box;
}

#add-blog {
  width: 80%;
  margin: 20px auto;
  max-width: 650px;
}

label {
  display: block;
  margin: 20px 0 10px;
}

input[type='text'],
textarea {
  padding: 5px;
  border-radius: 5px;
  outline: none;
  display: block;
  width: 100%;
  font-size: 1rem;
}

input[type='text'] {
  font-weight: 500;
}

textarea,
.light-text {
  font-weight: 300;
}

.normal-text {
  font-weight: 400;
}

#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

h3 {
  margin-top: 10px;
}

#checkboxes input {
  display: inline-block;
  margin-right: 15px;
}

#checkboxes label {
  display: inline-block;
}

.select-author {
  font-size: 0.9rem;
  background-color: #333;
  color: #fff;
  height: 30px;
}

.btn-blog {
  padding: 5px 10px;
  font-size: 0.9rem;
  border-radius: 5px;
  background-color: cornflowerblue;
  color: white;
  outline: none;
  cursor: pointer;
  border: 1px solid cornflowerblue;
  transition: background-color 650ms ease;
}

.btn-blog:hover {
  background-color: rgb(50, 110, 223);
}
</style>
