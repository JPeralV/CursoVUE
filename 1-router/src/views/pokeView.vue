<template>
  <container>
  <div v-if="poke">
    <img :src="poke.sprites?.front_default" alt="">
    <h1>Poke name: {{ $route.params.name }}</h1>
    
  </div>
  <h1 v-else> Cabe la posibilidad de que eso sea un digimon</h1>
  <button class="btn btn-primary" @click="back">P'atras</button>
  </container>
</template>

<script setup>

import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";

const poke = ref([]);

const route = useRoute();
const router = useRouter();

const back = () => {
  router.push('/pokemon')
};

const getData = async () => {
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
    console.log(data);
    poke.value = data;
  } catch (error) {
    console.log(error);
    poke.value = null;
  }
};

getData();
</script>