<script setup>
//const props = defineProps (['title','id','body','colorText']);

defineProps({
  title: String,
  id: Number,
  body: {
    type: String,
    default : '"Sin descripcion",
  }
})
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h5></h5>
      <button @click="$emit('cambiarFavorito',"title")"></button>
    </div>
    <button>Counter</button>
  </div>
</template>