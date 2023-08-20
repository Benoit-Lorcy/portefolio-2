<template>
  <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <mask id="mask0_432_40" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="500" height="500">
      <path class="cls-1" fill="#FFF500" d="m493,243.5c0,13.98-21.07,25.95-23.4,39.27-2.4,13.69,13.27,32.12,8.62,44.89-4.73,13-28.63,17.03-35.46,28.85s1.5,34.63-7.31,45.12-32.66,6.17-43.18,15-10.32,33.04-22.24,39.94c-11.82,6.84-32.71-5.37-45.71-.64-12.77,4.65-20.91,27.47-34.6,29.87-13.31,2.33-28.74-16.3-42.72-16.3s-29.4,18.63-42.72,16.3c-13.69-2.4-21.83-25.22-34.6-29.87-13-4.73-33.89,7.48-45.71.64-11.93-6.9-11.75-31.13-22.24-39.94s-34.35-4.48-43.18-15-.41-33.2-7.31-45.12-30.73-15.85-35.46-28.85c-4.65-12.77,11.02-31.2,8.62-44.89-2.33-13.31-23.4-25.29-23.4-39.27s21.07-25.95,23.4-39.27c2.4-13.69-13.27-32.12-8.62-44.89s28.63-17.03,35.46-28.85-1.5-34.63,7.31-45.12c8.84-10.52,32.66-6.17,43.18-15s10.32-33.04,22.24-39.94c11.82-6.84,32.71,5.37,45.71.64,12.77-4.65,20.91-27.47,34.6-29.87,13.31-2.33,28.74,16.3,42.72,16.3S276.4-1.13,289.72,1.2c13.69,2.4,21.83,25.22,34.6,29.87,13,4.73,33.89-7.48,45.71-.64,11.93,6.9,11.75,31.13,22.24,39.94,10.52,8.84,34.35,4.48,43.18,15s.41,33.2,7.31,45.12,30.73,15.85,35.46,28.85-11.02,31.2-8.62,44.89c2.33,13.31,23.4,25.29,23.4,39.27Z"/>
    </mask>
    <g mask="url(#mask0_432_40)" class="loading-spinner">
      <rect width="500" height="500" fill="#FFF500"/>
      <g filter="url(#filter0_f_432_40)" >
        <circle cx="125" cy="250" r="250" fill="#FFF500"/>
        <circle cx="125" cy="250" r="185" fill="#FF3636" />
        <circle cx="125" cy="250.5" r="122.5" fill="#C900FF" />
        <circle cx="125" cy="250" r="50" fill="#C900FF"/>
      </g>
      <g style="mix-blend-mode:saturation" >
        <rect width="500" height="500" fill="#FF0000"/>
      </g>
      <g style="mix-blend-mode:soft-light">
        <rect width="500" height="500" fill="url(#pattern0)"/>
      </g>
    </g>
    <defs>
      <filter id="filter0_f_432_40" x="-100" y="-100" width="700" height="700" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_432_40"/>
      </filter>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="0.128" height="0.128">
        <use xlink:href="#image0_432_40" transform="scale(0.001)"/>
      </pattern>
      <image id="image0_432_40" width="128" height="128" xlink:href="/noise.png"/>
    </defs>
  </svg>
</template>

<style scoped lang="postcss">
.loading-spinner {
  animation: loading-spinner 3s linear infinite;
  transform-origin: center;
}

@keyframes loading-spinner {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}


</style>

<script setup lang="ts">

</script>