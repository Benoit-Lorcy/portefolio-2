<template>
  <div class="h-screen">
    <Transition >
      <div v-if="loading" class="fixed left-0 top-0 h-full w-full z-50 bg-black flex justify-center items-center">
        <client-only>
          <Loader />
        </client-only>
      </div>
    </Transition>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

<script setup lang="ts">
  import Loader from "~/components/Loader.vue";

  const nuxtApp = useNuxtApp();
  const loading = useLoading();
  //const counter = useState('counter')
  nuxtApp.hook("app:beforeMount", () => {
    loading.value = true;
  });
</script>
