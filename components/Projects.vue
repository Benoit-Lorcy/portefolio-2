<template>
  <Slide id="projects">
    <div class="projects-container">
      <div class="projects-title">
        <h2>Projects</h2>
      </div>
      <div class="projects-cube">
          <client-only>
            <Cube />
          </client-only>
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
      @apply w-full md:w-1/2 flex items-center justify-center;

      h2{
        @apply text-4xl  md:text-6xl font-semibold mb-2;
      }
    }

    .projects-cube{
      @apply w-full md:w-1/2 flex items-center justify-center;
    }
  }

</style>

<script setup lang="js">

</script>

