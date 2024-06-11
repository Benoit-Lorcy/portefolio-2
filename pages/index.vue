<template>
  <div @wheel="throttledOnWheel" ref="slides">
    <Navbar />
    <!--<Next/>-->
    <Hero class="slide" />
    <client-only>
      <Projects class="slide" />
    </client-only>
    <Project1 class="slide" />
    <Project2 class="slide" />
    <Project3 class="slide" />
    <About class="slide" />
    <Contact class="slide" />
  </div>
</template>

<style lang="postcss">
html {
  scroll-behavior: smooth;
  background-color: black;
}
</style>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import throttle from 'lodash/throttle';

let currentSlide = 0;
const totalSlides = ref(0);
let isScrolling = false;

useHead({
  bodyAttrs: {
    class: 'overflow-hidden'
  }
});

const registerSlide = () => {
  totalSlides.value++;
};

provide('registerSlide', registerSlide);

const onWheel = (e: WheelEvent) => {
  if (isScrolling) return;
  isScrolling = true;

  if (e.deltaY > 0 && currentSlide < totalSlides.value - 1) {
    currentSlide++;
  } else if (e.deltaY < 0 && currentSlide > 0) {
    currentSlide--;
  }

  updateSlides();
  setTimeout(() => {
    isScrolling = false;
  }, 600);  // Adjust the timeout as needed
};

const throttledOnWheel = throttle(onWheel, 600);

onMounted(() => {
  let firstTouch = 0;
  let lastTouch = 0;
  window.addEventListener('touchstart', (event) => {
    firstTouch = event.touches[0].clientY;
    lastTouch = event.touches[0].clientY;
  });
  window.addEventListener('touchmove', (event) => {
    lastTouch = event.changedTouches[0].clientY;
  });
  window.addEventListener('touchend', () => {
    if (isScrolling) return;
    isScrolling = true;

    const touchDiff = firstTouch - lastTouch;
    if (touchDiff > 30 && currentSlide < totalSlides.value - 1) {
      currentSlide++;
    } else if (touchDiff < -30 && currentSlide > 0) {
      currentSlide--;
    }

    updateSlides();
    setTimeout(() => {
      isScrolling = false;
    }, 600);  // Adjust the timeout as needed
  });
});

function updateSlides() {
  const targetSlide = document.querySelectorAll('.slide')[currentSlide];
  if (targetSlide) {
    targetSlide.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>
