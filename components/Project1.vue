<template>
  <slide>
    <div class="project-container">
      <h2>Project 1</h2>
      <div class="content">
        <div class="images">
          <div class="logo-container">
            <img src="~/assets/img/project1/Paull.svg" alt="Paull logo">
          </div>
          <div class="img-container">
            <img src="~/assets/img/project1/3.png" alt="3">
            <img src="~/assets/img/project1/1.png" alt="2">
            <img src="~/assets/img/project1/2.png" alt="1">
          </div>
        </div>
        <div class="description">
          <h3>Description</h3>
          <p>An app where you can create polls and share them to your friends</p>
          <h3>Technologies</h3>
          <div class="logos">
            <img src="@/assets/img/techno/vue.svg" alt="logo" title="Vue">
            <img src="@/assets/img/techno/springboot.svg" alt="logo" title="Springboot">
            <img src="@/assets/img/techno/docker.svg" alt="logo" title="Docker">
            <img src="@/assets/img/techno/postgres.svg" alt="logo" title="Postgres">
          </div>
          <div class="links">
            <div class="source">
              <h3>Source code</h3>
              <a href="https://github.com/Benoit-Lorcy/poll-app"><img src="@/assets/img/socials/github.svg"
                  alt="github logo" title="github"></a>
            </div>
            <!--
            <div class="website">
              <h3>Website</h3>
              <a href="https://poll.lorcy.dev/"><img src="@/assets/img/socials/link.svg" alt="link logo" title="link"></a>
            </div>
            -->
          </div>
        </div>
      </div>
    </div>
  </slide>
</template>

<style scoped lang="postcss">
span {
  @apply text-2xl font-semibold;
}
</style>

<script setup lang="ts">

</script>

