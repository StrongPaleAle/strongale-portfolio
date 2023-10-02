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
import TheHero from './components/TheHero.vue';
import SectionAbout from './components/SectionAbout.vue';
import SectionPortfolio from './components/SectionPortfolio.vue';
import SectionContact from './components/SectionContact.vue';

//import TheOptions from './components/TheOptions.vue';
//import { getTheme, setTheme} from './utils/utils';

let enableVideo = ref<boolean>(!options.prefersReducedData && !options.prefersReducedMotion);


</script>

<template>
  <div class="app-inner" >

    <VideoBackground v-if="enableVideo" />
    <CoverStatic v-else />
    <!-- <CanvasBackground /> -->
    <!-- <CanvasCover /> -->
    <TheNav />
  <main id="wrapper">
    
    <TheHero />
    <SectionAbout />
    <SectionPortfolio />
    <SectionContact />
    
  </main>
  
  </div>
  
  
</template>

<style lang="scss">

@import "./scss/style.scss";
</style>
