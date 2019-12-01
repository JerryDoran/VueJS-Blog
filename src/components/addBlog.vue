<template>
  <!-- Need to have everything written inside one root element -->
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form action>
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required />
      <label>Blog Content:</label>
      <textarea rows="10" v-model.lazy="blog.content"></textarea>
    </form>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p class="light-text">
        <span class="normal-text">Content:</span>
      </p>
      <p>{{ blog.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: '',
        content: ''
      }
    };
  },
  methods: {}
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
</style>
