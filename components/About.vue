<template>
  <Slide id="about">
    <div class="pcontainer">
      <img src="@/assets/img/about/about.svg" alt="sablier">
      <div class="title">
        <h2>About me</h2>
      </div>
      <div class="description">
        <h3>Education</h3>
        <div>
          <span>
            2022 <br>
            2023
          </span>
          <p>
            UQAC : Master's degree in computer science in Quebec
          </p>
        </div>
        <div>
          <span>
            2021 <br>
            2024
          </span>
          <p>
            ISEN-Brest : Engineering (software development, big data and cloud computing)
          </p>
        </div>

        <h3 class="mt-8 md:mt-16">Experiences</h3>

        <div>
          <span>
            09-2022 <br>
            01-2023 <br>
            5 months
          </span>
          <p>
            Junior Enterprise Freelance rbauto-occasions.fr <br>
            • Creation of mock-ups for a showcase site <br>
            • Integration of a mock-up in WordPress
          </p>
        </div>
        <div>
          <span>
            07-2020 <br>
            1 month
          </span>
          <p>
            WordPress technician internship <br>
            • Learning WordPress  <br>
            • Using themes to create a showcase site
          </p>
        </div>
      </div>
    </div>
  </Slide>
</template>

<style scoped lang="postcss">
.title{
  @apply w-full flex items-start md:items-center justify-center mb-5 md:mb-0;

  h2{
    @apply text-4xl  md:text-6xl font-semibold;
  }
}

img{
  @apply absolute -z-10;
  max-height: 80vh;
}

@screen md {
  img{
    margin-left: -30rem;
  }
}

.description{
  @apply w-full items-center justify-center md:font-semibold;

  div{
    @apply flex flex-row mb-5;
  }

  h3{
    @apply mb-5 md:mb-10;
  }

  span {
    min-width: 6rem;
  }

}
</style>

<script setup lang="ts">

</script>