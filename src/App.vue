<script setup lang="ts">

import { ref, onMounted } from 'vue';
import { options } from './utils/options';

import TheNav from './components/TheNav.vue';
// import CanvasCover from './components/legacy/CanvasCover.vue';
// import CanvasBackground from './components/legacy/CanvasBackground.vue';
// import VideoBackground from './components/VideoBackground.vue';
// import CoverStatic from './components/CoverStatic.vue';

import SectionHero from './components/SectionHero.vue';
import SectionAbout from './components/SectionAbout.vue';
import SectionPortfolio from './components/SectionPortfolio.vue';
import SectionContact from './components/SectionContact.vue';
import TheFooter from './components/TheFooter.vue';
import TheLoader from './components/TheLoader.vue';
import TheTooltip from './components/TheTooltip.vue';

//let enableVideo = ref<boolean>(!options.prefersReducedData && !options.prefersReducedMotion);
let removeLoader = ref<boolean>(false);

onMounted(() => {
    
  window.addEventListener('load', () => {
    options.isLoaded = true;
    console.log(window.location.hash);
      if(window.location.hash) {
          
          const target = document.querySelector(window.location.hash);
          const targetOffset = target?.getBoundingClientRect().top;
          console.log(target);
          setTimeout(() => {
              window.scrollTo({
                  top: targetOffset,
                  behavior: "smooth",
              });
          }, 100);
      }
      setTimeout(() => {
        removeLoader.value = true;
      }, 500);
  });
    
});



</script>

<template>
  <TheLoader :class="{hidden: removeLoader}"/>
  <div class="app-inner" :class="{blocked: !options.isLoaded, modalOpen: options.isModalOpen}">

    <!-- <CanvasBackground v-if="enableVideo" />
    <CoverStatic v-else /> -->
    <!-- <CanvasBackground /> -->
    <!-- <CanvasCover /> -->
    <TheNav />
  <main id="wrapper">
    
    <SectionHero/>
    <SectionAbout/>
    <SectionPortfolio/>
    <SectionContact/>
    
  </main>
  <TheFooter />
  </div>
  <TheTooltip />
  
</template>

<style lang="scss">

@import "./scss/style.scss";
</style>
