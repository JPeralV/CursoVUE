<template>
  <div>
    <h1>Pomekos</h1>
    <ul>
      <li v-for ="poke in pokemons"> <router-link :to="`/pokemon/${poke.name}`" >{{ poke.name }}</router-link></li>
    </ul>
  </div>
</template>

<script setup>

import axios from 'axios';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const pokemons = ref([])

const getData = async () => {
  try {
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/');
    console.log(data.results);
    pokemons.value = data.results;
  } catch (error) {
    console.log(error)
  }
}


getData();

</script>