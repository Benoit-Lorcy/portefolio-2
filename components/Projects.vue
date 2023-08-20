<template>
  <Slide id="projects">
    <div class="projects-container">
      <div class="projects-title">
        <h2>Projects</h2>
      </div>
      <div class="projects-cube">
        <div class="cube-container">
          <canvas ref="canvas3d" />
        </div>
      </div>
    </div>
  </Slide>
</template>

<style scoped lang="postcss">
  .projects-container{
    @apply max-w-5xl container flex m-auto flex-col md:flex-row justify-center;
    color: white;
    height: 70vh;

    .projects-title{
      @apply w-full flex items-center justify-center;

      h2{
        @apply text-4xl  md:text-6xl font-semibold;
      }
    }

    .projects-cube{
      @apply w-full flex items-center justify-center;
    }
  }


  .cube-container{
    aspect-ratio: 1/1;
    margin: -10px;
  }

</style>

<script setup lang="js">
  import { Application } from '@splinetool/runtime';
  const canvas3d = ref(null);

  const loading = useLoading();

  const response = await fetch('/scene.splinecode');
  const array = await response.arrayBuffer();

  onMounted(async () => {
    const app = new Application(canvas3d.value);
    await app.start(array);
    loading.value = false;
  });
</script>

