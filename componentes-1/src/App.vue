<script setup>
/*
SETUP ES LA SIMPLIFICACION DE:

export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
  },
};*/

import ButtonCounter from './components/ButtonCounter.vue';
import BlogPost from './components/BlogPost.vue';

</script>

<template>
  <div class="container">
  <h1>App</h1>
  <ButtonCounter></ButtonCounter>
  <ButtonCounter></ButtonCounter>
  <BlogPost title = "Post 1" body ="Cobarrrrde" id="0" colorText ="primary">
    

  </BlogPost>


  <BlogPost title = "Post 2" body ="Jaaaaaarl" id="1" colorText="warning">


  </BlogPost>

  </div>

</template>

<style scoped>

</style>
