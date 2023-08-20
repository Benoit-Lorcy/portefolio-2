<template>
  <Slide id="contact">
    <div class="pcontainer">
      <div class="title">
        <img src="@/assets/img/contact/contact.svg" alt="circle">
        <h2>Contact me</h2>
      </div>
      <div class="description" @submit.prevent="submitForm">
        <h3>Form</h3>
          <form>
            <input v-model="name" placeholder="Your name">
            <input v-model="email" type="email" placeholder="Your email">
            <textarea v-model="message" placeholder="Your message" maxlength="300" rows="4" required></textarea>
            <button type="submit">Submit</button>
            <span v-if="formResponse != ''">{{formResponse}}</span>
          </form>
        <h3>Socials</h3>
        <div class="logos">
          <a href="https://www.linkedin.com/in/benoit-lorcy/"><img src="@/assets/img/socials/linkedin.svg" alt="linkedin" title="linkedin"></a>
          <a href="https://github.com/Benoit-Lorcy"><img src="@/assets/img/socials/github.svg" alt="github" title="github"></a>
          <a href="https://www.instagram.com/benoit.lorcy"><img src="@/assets/img/socials/instagram.svg" alt="instagram" title="instagram"></a>
          <a href="https://benoit.lorcy.info"><img src="@/assets/img/socials/link.svg" alt="link" title="link"></a>
        </div>
      </div>
    </div>
    <span>© Copyright Benoit Lorcy 2023</span>
  </Slide>
</template>

<style scoped lang="postcss">
#contact{
  @apply relative;
}

.title{
  @apply w-full flex items-start items-center justify-center mb-5 md:mb-0;

  h2{ @apply text-4xl  md:text-6xl font-semibold; }

  img{ @apply absolute -z-10 -rotate-90 w-1/2 md:w-auto; }
}

.description{ @apply w-full flex flex-col justify-start items-start font-semibold;  }

.logos{
  @apply flex flex-row space-x-6;
  img{
    @apply hover:opacity-75 transition-all duration-200
  }
}

form{
  @apply flex flex-col mb-5 md:mb-20 justify-start items-start w-full;

  input, textarea, button{ @apply bg-transparent rounded-lg outline outline-2 outline-white py-1.5 px-2 mb-5; }

  input, textarea{
    @apply w-full;
    resize: none;
  }

  button { @apply hover:opacity-90 hover:bg-white hover:text-black  transition-all delay-200; }
}

h3{ @apply mb-5; }

span{
  @apply absolute bottom-1 opacity-30;
}
</style>

<script setup lang="ts">
const name = ref('')
const email = ref('')
const message = ref('')
const formResponse = ref('')

async function submitForm() {
  try {
    const response = await $fetch('/api/form', {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        message: message.value
      }
    })
    formResponse.value = "Thanks for the message !"
    name.value = ''
    email.value = ''
    message.value = ''
  } catch (error) {
    formResponse.value = "An error occurred :c"
    console.error('There was an error sending the form', error)
  }
}
</script>