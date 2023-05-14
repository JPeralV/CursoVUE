<template>
<main
  components: { buttonComponent },>
v-if
<paginatePost>
  
</paginatePost>

<button.component
:disabled ="inicio <= 0"

></button.component>
<BlogPost title="1" :id="1" body="description 1" ></BlogPost>
<BlogPost></BlogPost>
<BlogPost></BlogPost>
<BlogPost></BlogPost>

<BlogPost
v-for="post in posts.slice(inicio,fin)" 
:key="post.id" 
:title="post.title"
:id="post.id"
:body="post.body"
:cambiarFavoritos = "cambiarFavorito"

>

</BlogPost>

</main>
</template>

<script setup>
defineProps(["inicio","fin"]);
import buttonComponent from "./components/button.component.vue";
import BlogPost from "./components/BlogPost.vue";
import paginatePost from "./components/paginatePost.vue";
import LoadingSponner from "./components/LoadingSpinner.vue"

const maxLength = computed(() => post.value.length)

const loadin = ref(true)


let import paginatePostVue from "./components/paginatePost.vue";
 favorito = ref("");

let post = ref([
]);

const cambiarFavorito = (post) => {
  favorito.value = post;
};
const next = () => {
  inicio.value += + postXpage
  fin.value += + postXpageS
};

const prev = () => {
  inicio.value += - postXpage
  fin.value += - postXpage
};

const postXpage = 10
const inicio = ref(0)
const fin = ref(postXpage)


fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res) => res.json())
  .then((data) => {
    posts.value = data;
  });
  .catch ((e) => console.log(e));
  .finally (() => {
  setTimeout(() => {
    LoadingSponner.value = false;
  }, 2000)
});

</script>

<style>

</style>