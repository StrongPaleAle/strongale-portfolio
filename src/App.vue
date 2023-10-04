<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue';
import { options } from './utils/options';

import TheNav from './components/TheNav.vue';
//import TheCover from './components/TheCover.vue';
//import CanvasCover from './components/CanvasCover.vue';
import VideoBackground from './components/VideoBackground.vue';
import CoverStatic from './components/CoverStatic.vue';
//import CanvasBackground from './components/CanvasBackground.vue';
import SectionHero from './components/SectionHero.vue';
import SectionAbout from './components/SectionAbout.vue';
import SectionPortfolio from './components/SectionPortfolio.vue';
import SectionContact from './components/SectionContact.vue';
import TheFooter from './components/TheFooter.vue';
import TheLoader from './components/TheLoader.vue';
//import TheOptions from './components/TheOptions.vue';
//import { getTheme, setTheme} from './utils/utils';

let enableVideo = ref<boolean>(!options.prefersReducedData && !options.prefersReducedMotion);

// watch(() => options.prefersReducedMotion, (newP) => {
//   enableVideo.value = (!newP && !options.prefersReducedData);
// })
window.addEventListener('load', () => {
    options.isLoaded = true;
    
});



</script>

<template>
  <TheLoader />
  <div class="app-inner" :class="{blocked: !options.isLoaded}">

    <VideoBackground v-if="enableVideo" />
    <CoverStatic v-else />
    <!-- <CanvasBackground /> -->
    <!-- <CanvasCover /> -->
    <TheNav />
  <main id="wrapper">
    
    <SectionHero />
    <SectionAbout  />
    <SectionPortfolio/>
    <SectionContact/>
    
  </main>
  <TheFooter />
  </div>
  
  
</template>

<style lang="scss">

@import "./scss/style.scss";
</style>
