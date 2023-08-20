<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<style lang="postcss">
  .slide{
    @apply h-screen flex items-center justify-center overflow-hidden;
  }
</style>

<script setup>
  const registerSlide = inject('registerSlide');

  if(registerSlide) registerSlide();
</script>

