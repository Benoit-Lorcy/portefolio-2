<template>
  <div class="h-screen">
    <Transition >
      <div v-if="loading" class="fixed left-0 top-0 h-full w-full z-50 bg-black flex justify-center items-center">
        <Loader />
      </div>
    </Transition>
    <Rotation v-if="isMobile" />
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

  useHead({
    title: 'Portfolio',
    meta: [{ name: 'Portfolio', content: 'My amazing portfolio made with love' }],
    link: [{ rel: 'icon', type: 'image/svg', href: '/MenuIcon.svg' }],
  })

  const nuxtApp = useNuxtApp();
  const loading = useLoading();
  //const counter = useState('counter')
  nuxtApp.hook("app:beforeMount", () => {
    loading.value = true;
  });

  nuxtApp.hook("app:mounted", () => {
    loading.value = false;
  });

  const isMobile = ref(false);

  onMounted(() => {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      isMobile.value = true;
    }
  })

</script>
