<template>
  <!-- Need to have everything written inside one root element -->
  <footer>
    <p>{{ copyright }} {{ title }}</p>
  </footer>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      copyright: 'Copyright 2019'
    };
  }
};
</script>

// Need to add the scoped key word to style each component's tags separately
<style scoped>
footer {
  background: #222;
  padding: 6px;
}

p {
  color: lightgreen;
  text-align: center;
}
</style>
