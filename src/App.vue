<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import TheCover from './components/TheCover.vue';
import TheHero from './components/TheHero.vue';
import SectionAbout from './components/SectionAbout.vue';
</script>

<template>
  <div id="wrapper">

    <section class="cover-wrapper">
      <TheCover />
      <TheHero />
    </section>
    
    <SectionAbout />
    
  </div>
  
</template>

<style lang="scss">

@import "./scss/style.scss";
</style>
