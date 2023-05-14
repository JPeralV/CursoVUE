<script setup>
const emit = defineEmits(['next','prev'])

const activarSiguiente = () => {
  console.log("me diste siguiente")
  emit("next")
}
</script>

<template>
  <div class="btn-group" role="group" aria-label="Basic example">
    <button @click="emit("prev")" type="button" class="btn btn-secondary">Previous</button>
    
    <button @click="emit("next")" type="button" class="btn btn-secondary">Next</button>
  </div>
</template>