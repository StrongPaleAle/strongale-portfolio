<script setup lang="ts">

import { ref } from 'vue';
import { options } from './utils/options';

import TheNav from './components/TheNav.vue';

import VideoBackground from './components/VideoBackground.vue';
import CoverStatic from './components/CoverStatic.vue';

import SectionHero from './components/SectionHero.vue';
import SectionAbout from './components/SectionAbout.vue';
import SectionPortfolio from './components/SectionPortfolio.vue';
import SectionContact from './components/SectionContact.vue';
import TheFooter from './components/TheFooter.vue';
import TheLoader from './components/TheLoader.vue';
import TheTooltip from './components/TheTooltip.vue';

let enableVideo = ref<boolean>(!options.prefersReducedData && !options.prefersReducedMotion);



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
    <SectionAbout />
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
