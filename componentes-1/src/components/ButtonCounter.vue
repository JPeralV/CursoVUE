<script setup>
import { ref } from 'vue';

const counter = ref(0);
const increment = () => counter.value++;

</script>



<template>
  <div>
    <button class="btn btn-primary" @click ="increment" >Sumale ahi {{ counter }}</button>
  </div>
</template>