<template>
<main>
  <h1>Heyyyyyy {{ name }}</h1>
  <h1>Heyyyyyy {{ name.toUpperCase() }}</h1>
<!--Permite usar expresiones de JavaScript-->
  <h2 v-bind:style="styleColor">Soy rosa con v-bind</h2>
  <h2 :style="styleColor">Soy rosa con la sustitucion de v-bin por :</h2>
<!--Los dos puntos ":" sustituyen a v-bind-->
  <h2 :style="`color: ${arrayColores[2]}`">Soy peruano</h2>
  <h2> {{ activo ? "Estoy activo" : "Estoy inactivo" }} </h2>
  <p v-if="activo === true">Estoy encendido</p>
  <p v-else="activo === false">Estoy apagado</p>
<hr>
  <ul>
  <li v-for="fruta in arrayFrutas" :key="name" >
    La fruta es {{ fruta.name }} cuesta {{ fruta.price }} y es {{ fruta.description }}
</li>

</ul>
<hr>
<ul> <template v-for="item in arrayFrutas" :key="item.name" >
  <li v-if="item.stock > 0">
    
    Ninio calipo no me queda solo {{ item.name }} a {{ item.price }}
  
  </li>
</template>

</ul>
<hr>
<button  v-on:click="clickar()">Hazme peruano</button>
<button @click="clickar2('Soy peruano pero acortando el procesos sustituyendo v-on por @')">Peruanizame</button>
<button @click.right.prevent="clickar2('Soy peruano pero acortando el procesos sustituyendo v-on por @ y ademas soy diestro')">Peruanizame con click derecho</button>
<hr>
<h2 v-if="counter >0" style="color: green;">{{ counter }}</h2>
<h2 v-else-if="counter <0" style="color: red;">{{ counter }}</h2>
<h2 v-else-if="counter === 0" style="color: pink;">{{ counter }}</h2>
<button @click="incremento">Subele</button>
<button @click="decremento">Bajale</button>
<button @click="reinicio">Reiniciemos</button>



</main>
</template>

<script setup>
import { ref } from 'vue';
const name = 'Vue dinámico'
const styleColor = "color: pink"
const arrayColores = ["blue","pink","peruano"]
const activo = false
const arrayFrutas = [
  {
    name :"🍎 Manzana",
    price: "1 buco",
    description:"la pesadilla de los medicos",
    stock:"1"
  },
  {
    name :"🍌Platano",
    price: "12 buco",
    description:"un tesoro pa los monos",
    stock:"100000000000"
  },
  {
    name :"🍉Pera",
    price: "15 buco",
    description:" muy paciente",
    stock:"0"
  },

]

 //Metodo
 const clickar =() => {
    console.log("Soy peruano");
  };
  const clickar2 =(mensaje) => {
    console.log(mensaje);
  };

  const incremento = () => {
    
    counter.value++;
    

  };

  const counter = ref(0);

  const decremento = () => {
    
    counter.value--
    

  };
  const reinicio = () => {
    
    counter.value = 0
    

  };


</script>

<style>

h1{
  color: aquamarine;
  font-weight: bold;
}

</style>