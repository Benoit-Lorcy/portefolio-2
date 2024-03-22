<template>
  <div @wheel="onWheel" ref="slides">
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
  let currentSlide = 0;
  const totalSlides = ref(0);

  useHead({
    bodyAttrs: {
      class: 'overflow-hidden'
    }
  })

  provide('registerSlide', () => {
    totalSlides.value++;
  })

  function onWheel(e : WheelEvent) {
    if (e.deltaY > 0 && currentSlide < totalSlides.value - 1) {
      currentSlide++;
    } else if (e.deltaY < 0 && currentSlide > 0) {
      currentSlide--;
    }
    updateSlides();
  }

  onMounted(() => {
    let firstTouch = 0;
    let lastTouch = 0;
    window.addEventListener('touchstart', function (event) {
      firstTouch = event.touches[0].clientY;
      lastTouch = event.touches[0].clientY;
    })
    window.addEventListener('touchmove', function (event){
      lastTouch = event.changedTouches[0].clientY;
    })
    window.addEventListener('touchend', (event) => {
      const touchDiff = firstTouch - lastTouch;
      //console.log(touchDiff)
      if(touchDiff > 30 && currentSlide < totalSlides.value - 1){
        currentSlide++;
        updateSlides()
      } else if(touchDiff < -30 && currentSlide > 0){
        currentSlide--;
        updateSlides()
      }
    })
  })

  function handleMove(event : any){
    lastTouch = event.changedTouches[0].clientY;
    const touchDiff = firstTouch - lastTouch;
    if(touchDiff > 50 && currentSlide < totalSlides.value - 1){
      currentSlide++;
      updateSlides()
    } else if(touchDiff < -50 && currentSlide > 0){
      currentSlide--;
      updateSlides()
    }
  }

  function updateSlides(){
    const targetSlide = document.querySelectorAll('.slide')[currentSlide];
    targetSlide.scrollIntoView({ behavior: 'smooth' });
  }
</script>


