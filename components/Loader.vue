<template>
  <img class="loading-spinner" src="/loader.svg" alt="loader"/>
</template>

<style scoped lang="postcss">
.loading-spinner {
  animation: loading-spinner 3s linear infinite;
  transform-origin: center;
}

@keyframes loading-spinner {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}


</style>

<script setup lang="ts">

</script>