<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
//import TheNav from './components/TheNav.vue';
import TheCover from './components/TheCover.vue';
//import TheHero from './components/TheHero.vue';
//import SectionAbout from './components/SectionAbout.vue';
//import SectionPortfolio from './components/SectionPortfolio.vue';
import { getTheme, setTheme } from './utils/utils';
import ComingSoon from './components/ComingSoon.vue';

const theme = getTheme();

setTheme(theme);
console.log(theme);

</script>

<template>
  <div class="app-inner">
    
    
    <div class="cover-shade"></div>
    <TheCover />
    
  <main id="wrapper">
    
    <ComingSoon />
    
    
  </main>
  </div>
  
  
</template>

<style lang="scss">

@import "./scss/style.scss";
</style>
