<template>
  <a :href="('#' + props.slideName)" class="next-slide">
    {{props.slideName}}
    <img src="~/assets/icons/ArrowBottom.svg" alt="arrow pointing to the bottom">
  </a>
</template>

<style lang="postcss">
  .next-slide{
    display: flex;
    flex-direction: column;
    justify-items: center;
    color: white;
    align-items: center;
    font-weight: 700;
    bottom: 1rem;

    :first-letter{
      text-transform: uppercase;
    }

    img{
      margin-top: 0.2rem;
      width: 2rem;
    }
  }
</style>

<script setup lang="ts">
  const props = defineProps(['slideName'])
</script>