<template>
  <Slide id="hero">
    <div class="hero-background">
      <img src="@/assets/img/hero/Hero2.svg" alt="hero" />

      <!--<heroBackground class="hero-img"/>-->
    </div>
    <div class="hero-text">
      <span>Hi my name is</span>
      <h1>
        Benoit Lorcy
      </h1>
      <h2>I create cool websites</h2>
    </div>
  </Slide>
</template>

<style lang="postcss">
  #hero{
    @apply w-screen overflow-hidden;
  }

  .hero-background{
    @apply min-w-max pl-48 md:p-0 md:w-full;

    img{
      @apply w-full;
    }

    .hero-img{
      @apply w-full;
    }
  }

  .hero-text{
    @apply absolute right-5 pb-52 md:right-auto md:pl-80 md:pb-52;

    span{
      @apply text-white;
    }

    h1, h2 {
      @apply text-white font-semibold text-2xl sm:text-3xl md:text-6xl;
    }
  }
</style>

<script setup lang="ts">
  const test2 = ref('')

  onMounted(() => {
    test2.value = '/Hero2.svg';
  })
</script>
