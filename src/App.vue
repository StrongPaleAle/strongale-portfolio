<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import TheCover from './components/TheCover.vue';
import TheHero from './components/TheHero.vue';
import SectionAbout from './components/SectionAbout.vue';
import SectionPortfolio from './components/SectionPortfolio.vue';
import { getTheme, setTheme } from './utils/utils';

const theme = getTheme();

setTheme(theme);
//console.log(theme);

</script>

<template>
  <div id="wrapper">
    <div class="cover-shade"></div>
    
    <TheCover />
    
    <TheHero />
    <SectionAbout />
    <SectionPortfolio />
    
  </div>
  
</template>

<style lang="scss">

@import "./scss/style.scss";
</style>
