<template>
  <div>
    <h1>404</h1>
    <button @click="back"> P'atras</button>
  </div>
</template>

<script setup>

import { useRouter } from "vue-router";

const router = useRouter();

const back = () => {
  router.push('/')
};

</script>