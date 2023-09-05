<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import TheNav from './components/TheNav.vue';
import TheCover from './components/TheCover.vue';
//import CanvasCover from './components/CanvasCover.vue';
import TheHero from './components/TheHero.vue';
import SectionAbout from './components/SectionAbout.vue';
import SectionPortfolio from './components/SectionPortfolio.vue';
import SectionContact from './components/SectionContact.vue';
import TheOptions from './components/TheOptions.vue';
//import { getTheme, setTheme} from './utils/utils';




</script>

<template>
  <div class="app-inner" >

    <TheOptions />
    
    <TheCover />
    
  <main id="wrapper" style="height: 100vh;">
    
    <!-- <TheHero />
    <SectionAbout />
    <SectionPortfolio />
    <SectionContact /> -->
    
  </main>
  <svg width="0" height="0" viewBox="0 0 1 1" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <defs>
        <clipPath id="mask-logo" clipPathUnits="objectBoundingBox">
          <path id="mini-logo" d="M0.062,0.381c-0,0 0.129,0.129 0.129,0.129c-0,0 0.165,-0.165 0.165,-0.165l-0.284,-0.283c-0.01,-0.01 -0.013,-0.026 -0.008,-0.04c0.006,-0.013 0.019,-0.022 0.034,-0.022l0.186,0c0.009,0 0.019,0.004 0.025,0.011c0,-0 0.191,0.19 0.191,0.19l0.191,-0.19c0.006,-0.007 0.016,-0.011 0.025,-0.011l0.186,0c0.015,0 0.028,0.009 0.034,0.022c0.005,0.014 0.002,0.03 -0.008,0.04l-0.284,0.283l0.165,0.165l0.129,-0.129c0.01,-0.01 0.026,-0.013 0.04,-0.007c0.013,0.005 0.022,0.018 0.022,0.033l-0,0.186c-0,0.01 -0.004,0.019 -0.011,0.026l-0.37,0.37c-0.007,0.007 -0.016,0.011 -0.026,0.011l-0.186,0c-0.01,0 -0.019,-0.004 -0.026,-0.011l-0.37,-0.37c-0.007,-0.007 -0.011,-0.016 -0.011,-0.026l-0,-0.186c0,-0.015 0.009,-0.028 0.022,-0.033c0.014,-0.006 0.03,-0.003 0.04,0.007Zm0.438,0.109c-0,-0 -0.165,0.165 -0.165,0.165c0,-0 0.165,0.165 0.165,0.165c0,-0 0.165,-0.165 0.165,-0.165l-0.165,-0.165Z" style="fill:#5cff23;"/>
        </clipPath>
    </defs>
  </svg>
  </div>
  
  
</template>

<style lang="scss">

@import "./scss/style.scss";
</style>
