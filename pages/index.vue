<template>
  <div @wheel="onWheel">
    <Navbar />
    <!--<Next/>-->
    <Hero />
    <client-only><Projects /></client-only>
    <Project1 />
    <Project2 />
    <Project3 />
    <About />
    <Contact />
  </div>
</template>

<style lang="postcss">
  html {
    scroll-behavior: smooth;
    background-color: black;
  }
</style>

<script setup lang="ts">
  useHead({
    bodyAttrs: {
      class: 'overflow-hidden'
    }
   })

  let currentSlide = 0;
  const totalSlides = ref(0);

  provide('registerSlide', () => {
    totalSlides.value++;
  })

  function onWheel(e : WheelEvent) {
    if (e.deltaY > 0 && currentSlide < totalSlides.value - 1) {
      currentSlide++;
    } else if (e.deltaY < 0 && currentSlide > 0) {
      currentSlide--;
    }
    const targetSlide = document.querySelectorAll('.slide')[currentSlide];
    targetSlide.scrollIntoView({ behavior: 'smooth' });
  }
</script>


