<script setup>

defineProps(['title','body','id','colorText'])

</script>

<template>
  <div class="card">
    <div class="card-body"></div>
      <h5 class="card-title" :class="`text-${colorText}`"> {{ id }} - {{ title }}</h5>
      <p> {{ body }}

  </p>
  </div>
</template>