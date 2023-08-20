<template>
  <nav>
    <div>
      <div class="nav-top">
        <a href="#">
          <img src="~/assets/icons/MenuIcon.svg" alt="eyes">
        </a>
        <button ref="dropdownButton" type="button" @click="toggleDropdown()" >
          <svg class="nav-burger" width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="25" height="3.84466" rx="1.92233"/>
            <rect y="9.0777" width="25" height="3.84466" rx="1.92233"/>
            <rect y="18.1553" width="25" height="3.84466" rx="1.92233"/>
          </svg>
        </button>
      </div>
      <div ref="dropdownContainer" class="nav-links" :class="{'hidden': !showMenu, 'flex': showMenu}">
        <a href="#hero">
          Home
        </a>
        <a href="#projects">
          Projects
        </a>
        <a href="#about">
          About
        </a>
        <a href="#contact">
          Contact
        </a>
        <a href="/CV_Benoit_Lorcy.pdf" download="" class="download">
          Resume
        </a>
      </div>
    </div>
  </nav>
</template>

<style lang="postcss">
  nav{
    @apply w-full fixed flex items-center my-6 z-10;

    div{
      @apply max-w-5xl container mx-auto flex flex-wrap md:flex-nowrap px-4;
    }
  }

  .nav-top{
    @apply w-full flex flex-row justify-between;

    a img{
      @apply h-full;
    }

    button{
      @apply text-white block md:hidden hover:opacity-90 p-2 outline outline-2 outline-white rounded-lg;
    }
  }

  .nav-links{
    @apply w-auto mr-4 md:mr-0 flex-col justify-end items-end md:flex-row space-x-0 md:flex md:space-x-10 [&>*]:transition-all [&>*]:duration-300 bg-white rounded-lg md:bg-transparent;
    animation: show-menu .5s both;

    a{
      @apply py-1 font-semibold text-black my-0.5 md:text-white hover:opacity-75;
    }
  }

  .download{
    @apply px-0 md:px-2 outline outline-2 outline-white rounded-lg hover:opacity-90 hover:bg-white hover:text-black;
  }

  .nav-burger{
    rect{
    fill: white;
    }
  }
  
  @keyframes show-menu {
    0% {
      opacity: 0;
    }
  }

</style>

<script setup lang="ts">
  const showMenu = ref(false);
  const dropdownContainer = ref(null);
  const dropdownButton = ref(null);

  const toggleDropdown = () => {
    showMenu.value = !showMenu.value;
    if (showMenu.value) {
      document.addEventListener('mousedown', onClickOutside);
    } else {
      document.removeEventListener('mousedown', onClickOutside);
    }
  };

  const onClickOutside = event => {
    if (dropdownContainer.value && !dropdownContainer.value.contains(event.target) && dropdownButton.value && !dropdownButton.value.contains(event.target)) {
      showMenu.value = false;
      document.removeEventListener('mousedown', onClickOutside);
    }
  };
</script>
