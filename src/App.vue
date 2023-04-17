<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import TheNav from './components/TheNav.vue';
import TheCover from './components/TheCover.vue';
import CoverMask from './components/CoverMask.vue';
import TheHero from './components/TheHero.vue';
import SectionAbout from './components/SectionAbout.vue';
import SectionPortfolio from './components/SectionPortfolio.vue';
import { getTheme, setTheme } from './utils/utils';

const theme = getTheme();

setTheme(theme);
console.log(theme);

</script>

<template>
  
  <main id="wrapper">
    <TheCover />
    <div class="cover-shade"></div>
    
    <TheHero />
    <SectionAbout />
   
    
  </main>
  <CoverMask />
  
</template>

<style lang="scss">

@import "./scss/style.scss";
</style>
