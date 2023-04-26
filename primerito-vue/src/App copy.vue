<template>
<main
  components: { buttonComponent },>

<button.component></button.component>
<BlogPost title="1" :id="1" body="description 1" ></BlogPost>
<BlogPost></BlogPost>
<BlogPost></BlogPost>
<BlogPost></BlogPost>

<BlogPost
v-for="post in posts" :key="post.id" @cambiarFavoritos = "cambiarFavorito">

</BlogPost>

</main>
</template>

<script setup>
import button.component from "./components/button.component.vue";
import BlogPost from "./components/BlogPost.vue"

const favorito = ref("");

const post = ref([
  {title: 'Post 1', id: 1, body: 'descripcion 1'},
  {title: 'Post 2', id: 2, body: 'descripcion 2'},
  {title: 'Post 3', id: 3, body: 'descripcion 3'},
])

const cambiarFavorito = (post) => {
  favorito.value = post;
}

</script>

<style>

</style>