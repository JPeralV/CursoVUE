<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/" >Inicio</router-link>
      <div class="container">
        <router-link class="btn btn-outline-primary me-2" to="/pokemon" >Pokemo</router-link>
        <router-link class="btn btn-outline-primary" to="/about" >About</router-link>
      </div>
        <img src="@/assets/logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
        Bootstrap
    </div>
  </nav>

  <RouterView/>
  
</template>

<style scoped>

</style>
