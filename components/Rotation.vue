<template>
  <div class="rotator">Please rotate your screen</div>
</template>

<style scoped lang="postcss">
.rotator {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  color: #fff;
  font-size: 24px;
  text-align: center;
  justify-content: center;
  align-items: center;
  z-index: 99999;
}

@media (orientation:landscape) {
  .rotator {
    display: flex;
  }
}
</style>

<script setup lang="ts">

</script>
